import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ppost',
  templateUrl: './ppost.component.html',
  styleUrls: ['./ppost.component.css']
})
export class PpostComponent implements OnInit {

  constructor(private apis: ProductService) { }
  Tposts = [];
  category=[];
  tbprofile;
  ariereplan;
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataposts()
    this.getDataCategoriposts()
    this.getDataprofile()
    this.getariereplan()
  }
  getDataposts() {
    this.apis.getDataposts().subscribe((res: any) => {
      this.Tposts = res;
    })
  }
  getDataCategoriposts() {
    this.apis.getDataCategoriposts().subscribe((res: any) => {
      this.category = res;
      console.log(this.category)
    })
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;
    })
  }
  getariereplan() {
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
  }

