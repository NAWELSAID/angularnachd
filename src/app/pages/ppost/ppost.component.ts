import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ppost',
  templateUrl: './ppost.component.html',
  styleUrls: ['./ppost.component.css']
})
export class PpostComponent implements OnInit {

  constructor(private apis: ProductService, public translate:TranslateService) { }
  all = [];
  category=[];
  what_we_do=[];
  tbprofile;
  posts
  ariereplan;
  lien = this.apis.lien;
  select = 'all'
  isLoading = false

  ngOnInit(): void {
    this.getDataposts()
    this.getDataCategoriposts()
    this.getDataprofile()
    this.getariereplan()
    this.getDataService()
  }
  getDataService() {
    this.apis.getDataService().subscribe((res: any) => {
      this.what_we_do = res;
    })
  }
  getDataposts() {
    this.apis.getDataposts().subscribe((res: any) => {
      this.all = res;
      this.posts = res
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
    this.isLoading = true
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
      this.isLoading = false

    })
  }
  onSubmit(id): void {
    /*   this.apis.getDatabyprojects(id).subscribe((res: any) => {
        this.project = res;
      }) */

      this.posts = this.all.filter((p)=>p.category == id)
     // this.project = this.project.slice(0,6)
      this.select = id
    }
    allproject(){
      this.posts = this.all
      //this.project = this.project.slice(0,6)
      this.select = 'all'
    }
  }

