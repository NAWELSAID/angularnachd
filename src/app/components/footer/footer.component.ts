import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentLang:string;

  constructor(private apis: ProductService,public translate:TranslateService) { }
  ariereplan;
  tbprofile;
  aboutus;
  lien = this.apis.lien;
  Fr = false;
  En = false;
  ngOnInit(): void {
    this.getDataprofile()
    this.getariereplan()
    this.getdataaboutus()
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
  getdataaboutus() {
    this.apis.getdataaboutus().subscribe((res: any) => {
      console.log('res', res)
      this.aboutus = res;
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
