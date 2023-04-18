import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-psolustion',
  templateUrl: './psolustion.component.html',
  styleUrls: ['./psolustion.component.css']
})
export class PsolustionComponent implements OnInit {


  constructor(private apis: ProductService) { }
  tbprofile;
  nachdums;
  ariereplan;
  service=[];
  lien = this.apis.lien;
  multi=[];
  video=[];
  ngOnInit(): void {
    this.getDataprofile()
    this.getDatanachdums()
    this.getariereplan()
    this.getdatanachdumservice()
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
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
  getdatanachdumservice() {
    this.apis.getdatanachdumservice().subscribe((res: any) => {
      console.log('res', res)
      this.service = res;
    })
  }
}
