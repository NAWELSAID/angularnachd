import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-visualidentite',
  templateUrl: './visualidentite.component.html',
  styleUrls: ['./visualidentite.component.css']
})
export class VisualidentiteComponent implements OnInit {
    constructor(private apis: ProductService, public translate:TranslateService) { }
    aboutus;
    ariereplan;
    video=[];
    lien = this.apis.lien;
    ngOnInit(): void {
    this.getdataaboutus();
    }
    getariereplan() {
      this.apis.getariereplan().subscribe((res: any) => {
        console.log('res', res)
        this.ariereplan = res;
      })
    }
    getdataaboutus() {
      this.apis.getdataaboutus().subscribe((res: any) => {
        console.log('res', res)
        this.aboutus = res;
        this.video = JSON.parse(res.videohistory)
        setTimeout(() => {
          var x = document.getElementById('vide')
          if(this.video && this.video.length >0){
            let link = this.lien+this.video[0].download_link

          x.innerHTML = `
            <video class="bg-image cover-bg dsn-video" style="z-index : 999999 !important" preload="none" data-dsn-poster="" autoplay="" loop=""
            muted="" playsinline="">
            <source src="${link}" type="video/mp4">
            </video>`
          }
        },0)
      })
    }
  }
