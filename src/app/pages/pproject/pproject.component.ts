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
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataprojects()
    this.getDataLastprojects()
    this.getDataCategoriprojects()
  }

  getDataprojects() {
    this.apis.getDataprojects().subscribe((res: any) => {
      this.project = res;
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
  }
