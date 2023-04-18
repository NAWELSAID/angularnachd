import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-slidstoris',
  templateUrl: './slidstoris.component.html',
  styleUrls: ['./slidstoris.component.css']
})
export class SlidstorisComponent implements OnInit {

  constructor(private apis: ProductService) { }

  Stories = [];

  lien = this.apis.lien
  ngOnInit(): void {
    this.getDataLaststories()

  }
  getDataLaststories() {
    this.apis.getDataLaststories().subscribe((res: any) => {
      this.Stories = res;
    })
  }
}
