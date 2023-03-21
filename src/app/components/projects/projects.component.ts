import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor(private apis : ProductService) { }

  project = [];
  lproject = [];
  category=[];
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataLastprojects()
    this.getDataCategoriprojects()
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

