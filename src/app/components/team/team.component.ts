import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private apis: ProductService) { }
   membre = [];
  lien = this.apis.lien
  ngOnInit(): void {
    this.getDatamembre()

  }
  getDatamembre() {
    this.apis.getDatamembre().subscribe((res: any) => {
      this.membre = res;
    })
  }}
