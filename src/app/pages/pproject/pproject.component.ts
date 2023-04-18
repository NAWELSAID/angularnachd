import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pproject',
  templateUrl: './pproject.component.html',
  styleUrls: ['./pproject.component.css']
})
export class PprojectComponent implements OnInit {
  constructor(private apis : ProductService) { }

  project = [];
  lproject = [];
  category=[];
  ariereplan;
  tbprofile;
  lien = this.apis.lien;
  all
  ngOnInit(): void {
    this.getDataprojects()
    this.getDataLastprojects()
    this.getDataCategoriprojects()
    this.getariereplan()
    this.getDataprofile()
  }

  getDataprojects() {
    this.apis.getDataprojects().subscribe((res: any) => {
      this.project = res;
      this.all = res;
    })
  }
    getDataLastprojects() {
      this.apis.getDataLastprojects().subscribe((res: any) => {
        this.lproject = res;
      })
  }
  getDataCategoriprojects() {
    this.apis.getDataCategoriprojects().subscribe((res: any) => {
      this.category = res;
    })
  }
  getariereplan() {
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;

    })
  }
  onSubmit(id): void {
    this.apis.getDatabyprojects().subscribe((res: any) => {
      this.project = res;
    })
}
}
