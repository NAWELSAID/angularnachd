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
  projects = []
  last_projects = []
  category=[];
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataLastprojects()
    this.getDataCategoriprojects()
    this.getDataprojects()
  }
  getDataprojects() {
    this.apis.getDataprojects().subscribe((res: any) => {
      this.lproject = res;
      this.last_projects = res;
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

