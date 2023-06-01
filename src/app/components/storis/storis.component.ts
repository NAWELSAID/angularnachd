import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-storis',
  templateUrl: './storis.component.html',
  styleUrls: ['./storis.component.css']
})
export class StorisComponent implements OnInit {

  constructor(private apis: ProductService, public translate:TranslateService) { }

  Stories = [];
  Stories2 = [];
  Stories3 = [];

  lien = this.apis.lien
  ngOnInit(): void {
    this.getDataLaststories()
    this.getDataLast4stories()
    this.getDataLast8stories()
    this.getDataAlllaststories()

  }
  getDataLaststories() {
    this.apis.getDataLaststories().subscribe((res: any) => {
      this.Stories = res;
    })
  }
  getDataLast4stories() {
    this.apis.getDataLast4stories().subscribe((res: any) => {
      this.Stories2 = res;
    })
  }
  getDataLast8stories() {
    this.apis.getDataLast8stories().subscribe((res: any) => {
      this.Stories3 = res;
    })
  }
  getDataAlllaststories() {
    this.apis.getDataLaststories().subscribe((res: any) => {
      this.Stories = res;
    })
  }

}
