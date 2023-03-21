import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.css']
})
export class IdentiteComponent implements OnInit {

  constructor( private identserv : ProductService) { }

  content : any={}


  ngOnInit(): void {
this.identserv.getData()
.subscribe((data:any)=>{
  console.log(data)
  this.content = data.content
  
}



)
    }

  }