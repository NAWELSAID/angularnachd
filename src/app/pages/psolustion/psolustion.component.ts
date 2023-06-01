import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-psolustion',
  templateUrl: './psolustion.component.html',
  styleUrls: ['./psolustion.component.css']
})
export class PsolustionComponent implements OnInit {


  constructor(private apis: ProductService, public translate:TranslateService) { }
  tbprofile;
  nachdums;
  ariereplan;
  service=[];
  lien = this.apis.lien;
  multi=[];
  video=[];
  Stories=[];
  isLoading = false
  ngOnInit(): void {
    this.getDataAlllaststories()
    this.getDataprofile()
    this.getDatanachdums()
    this.getariereplan()
    this.getdatanachdumservice()
  }
  getDataAlllaststories(){
    this.apis.getDataAlllaststories().subscribe((res: any) => {
      console.log(res)
      this.Stories = res

    })
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res', res)
      this.tbprofile = res;
    })
  }
  getDatanachdums() {
    this.apis.getDatanachdums().subscribe((res: any) => {
      console.log('res', res)
      this.nachdums = res;
      this.multi = JSON.parse(res.multi_photo)
      this.video = JSON.parse(res.video)

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
  getdatanachdumservice() {
    this.apis.getdatanachdumservice().subscribe((res: any) => {
      console.log('res', res)
      this.service = res;
    })
  }
  multii(p){
    console.log(p)
    return JSON.parse(p.photo)
  }
}
