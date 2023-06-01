import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private apis: ProductService, public translate:TranslateService) { }
  what_we_do = [];
  tbprofile;
  ariereplan;
  aboutus;
  lien = this.apis.lien;
  x= false
  lien_video = 'assets/photo/video.mp4'
  isLoading = false

  ngOnInit(): void {
    this.script()
    this.getDataprofile()
    this.getariereplan()
    this.getdataaboutus()
    this.getDataService()
    setTimeout(() => {

      var x = document.getElementById('vid')
      x.innerHTML =    `<video class="bg-image cover-bg dsn-video" preload="none" autoplay="" loop="" muted="" playsinline="" poster="">
      <source src="${this.lien_video}" type="video/mp4">
  </video>`
    }, 2000);
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
  getdataaboutus() {
    this.apis.getdataaboutus().subscribe((res: any) => {
      console.log('res', res)
      this.aboutus = res;
    })
  }
  getDataService() {
    this.apis.getDataService().subscribe((res: any) => {
      this.what_we_do = res;
    })
  }


  script(){

    setTimeout((e) => {



    }, 1);
  }
}
