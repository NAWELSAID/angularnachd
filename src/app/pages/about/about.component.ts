import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private contentserv : ProductService) { }

  content : any=[]

 
  ngOnInit(): void {
this.contentserv.getData()
.subscribe((data:any)=>{
  console.log(data)
  this.content = data.content
  
}



)
    }

  }
