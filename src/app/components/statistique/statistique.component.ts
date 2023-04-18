import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(private apis: ProductService) { }
  aboutus;
  lien = this.apis.lien;
  ngOnInit(): void {
  this.getdataaboutus();
  }
  getdataaboutus() {
    this.apis.getdataaboutus().subscribe((res: any) => {
      console.log('res', res)
      this.aboutus = res;
    })
  }
}
