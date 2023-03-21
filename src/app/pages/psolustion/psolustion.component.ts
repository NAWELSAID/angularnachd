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
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataprofile()
    this.getDatanachdums()
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
    })
  }
}
