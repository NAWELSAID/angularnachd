
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apis: ProductService) { }

  what_we_do = [{name_fr : ' k' }];
  tbprofile;
  nachdums;
  ariereplan;
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataService()
    this.getDataprofile()
    this.getariereplan()
  }
  getDataService() {
    this.apis.getDataService().subscribe((res: any) => {
      this.what_we_do = res;
    })
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;

    })
  }
  getDatanachdums() {
    this.apis.getDatanachdums().subscribe((res: any) => {
      console.log('res', res)
      this.nachdums = res;
    })
  }
  getariereplan() {
    this.apis.getariereplan().subscribe((res: any) => {
      console.log('res', res)
      this.ariereplan = res;
    })
  }
}

