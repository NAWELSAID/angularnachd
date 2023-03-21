import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor( private contentserv : ProductService) { }

  content : any={}

 
  ngOnInit(): void {
this.contentserv.getData()
.subscribe((data:any)=>{
  console.log(data)
  this.content = data.content
  
}



)
    }

  }

