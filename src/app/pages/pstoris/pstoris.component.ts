import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pstoris',
  templateUrl: './pstoris.component.html',
  styleUrls: ['./pstoris.component.css']
})
export class PstorisComponent implements OnInit {

  constructor(private apis:ProductService) { }
  Stories = [];
  category= [];
  ariereplan;
  tbprofile;
  lien = this.apis.lien
  ngOnInit(): void {
    this.getDataAlllaststories()
    this.getDataCategoristory()
    this.getariereplan()
    this.getDataprofile()
  }
  getDataAlllaststories(){
      this.apis.getDataAlllaststories().subscribe((res: any) => {
        console.log(res)
        this.Stories = res
      })
    }
    getDataCategoristory() {
      this.apis.getDataCategoristory().subscribe((res: any) => {
        this.category = res;
        console.log(this.category)
      })
    }
    getariereplan() {
      this.apis.getariereplan().subscribe((res: any) => {
        console.log('res', res)
        this.ariereplan = res;
      })
    }
    getDataprofile() {
      this.apis.getDataprofile().subscribe((res: any) => {
        console.log('res',res)
        this.tbprofile = res;

      })
    }
  }
