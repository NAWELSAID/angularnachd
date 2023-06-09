import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-solustion',
  templateUrl: './solustion.component.html',
  styleUrls: ['./solustion.component.css']
})
export class SolustionComponent implements OnInit {

  constructor(private apis: ProductService, public translate:TranslateService) { }
  tbprofile;
  nachdum;
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDatanachdums()
  }
  getDatanachdums() {
    this.apis.getDatanachdums().subscribe((res: any) => {
      console.log('res', res)
      this.nachdum = res;
    })
  }
}
