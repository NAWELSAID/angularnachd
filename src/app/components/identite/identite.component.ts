import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.css']
})
export class IdentiteComponent implements OnInit {

  constructor(private apis: ProductService) { }
  aboutus;
  ariereplan;
  lien = this.apis.lien;
  ngOnInit(): void {
  this.getdataaboutus();
 this.getariereplan();
  }
  getdataaboutus() {
    this.apis.getdataaboutus().subscribe((res: any) => {
      console.log('res', res)
      this.aboutus = res;
    })
  }
  getariereplan() {
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
}
