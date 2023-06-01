import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentLang:string;
  title = 'nachdittemplate';

  constructor(private apis: ProductService, public translate:TranslateService) { }
  tbprofile;
  ariereplan;
  lien = this.apis.lien;
  Fr = false;
  En = false;
  ngOnInit(): void {
    this.getDataprofile()
    this.getariereplan()
    this.currentLang=localStorage.getItem('currentLang')|| 'fr';
    this.translate.use(this.currentLang);
    if (this.currentLang =='fr'){this.En = true}
    if (this.currentLang =='en'){this.Fr = true}

  }

  changeCurrentLang(Lang:string){
    if (Lang == 'fr'){
      this.translate.use(Lang);
      localStorage.setItem('currentLang',Lang)
      this.Fr=false
      this.En=true
    }else{
      this.translate.use(Lang);
      localStorage.setItem('currentLang',Lang)
      this.Fr=true
      this.En=false
    }


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

