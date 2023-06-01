import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor(private apis : ProductService, public translate:TranslateService) { }
  what_we_do =[];
  project = [];
  lproject = [];
  projects = []
  last_projects = []
  category=[];
  lien = this.apis.lien;
  all : any= []
  select = 'all'
  ngOnInit(): void {
    this.getDataLastprojects()
    this.getDataCategoriprojects()
    this.getDataprojects()
    this.getDataService()
  }
  getDataService() {
    this.apis.getDataService().subscribe((res: any) => {
      this.what_we_do = res;
    })
  }
  getDataprojects() {
    this.apis.getDataprojects().subscribe((res: any[]) => {

      this.all = res;
      this.project = res
      this.project = this.project.slice(0,6)
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
  onSubmit(id): void {
    /*   this.apis.getDatabyprojects(id).subscribe((res: any) => {
        this.project = res;
      }) */

      this.project = this.all.filter((p)=>p.category == id)
      this.project = this.project.slice(0,6)
      this.select = id
    }
    allproject(){
      this.project = this.all
      this.project = this.project.slice(0,6)
      this.select = 'all'
    }
  }

