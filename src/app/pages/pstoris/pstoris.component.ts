import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pstoris',
  templateUrl: './pstoris.component.html',
  styleUrls: ['./pstoris.component.css']
})
export class PstorisComponent implements OnInit {

  constructor(private apis:ProductService, public translate:TranslateService) { }
  Stories = [];
  ariereplan;
  tbprofile;
  lien = this.apis.lien
  isLoading = false

  ngOnInit(): void {
    this.getDataAlllaststories()
    this.getariereplan()
    this.getDataprofile()
  }
  getDataAlllaststories(){
    this.isLoading = true
      this.apis.getDataAlllaststories().subscribe((res: any) => {
        console.log(res)
        this.Stories = res
        this.isLoading = false

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
    getDataprofile() {
      this.apis.getDataprofile().subscribe((res: any) => {
        console.log('res',res)
        this.tbprofile = res;

      })
    }


    multi(p){
      console.log(p)
      return JSON.parse(p.photo)
    }
  }
