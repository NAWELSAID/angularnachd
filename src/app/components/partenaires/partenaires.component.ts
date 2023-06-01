import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor(private apis: ProductService, public translate:TranslateService) { }
  partenaire=[];
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getdatapartenair()
  }
  getdatapartenair() {
    this.apis.getdatapartenair().subscribe((res: any) => {
      console.log('partenaire', res)
      this.partenaire = res;
    })
  }
}
