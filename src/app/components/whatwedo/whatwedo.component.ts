import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent implements OnInit {

  constructor(private apis: ProductService) { }

  what_we_do = [];
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataService()
  }
  getDataService() {
    this.apis.getDataService().subscribe((res: any) => {
      this.what_we_do = res;
    })
  }
}