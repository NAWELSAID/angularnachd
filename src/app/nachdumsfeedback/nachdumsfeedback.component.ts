import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-nachdumsfeedback',
  templateUrl: './nachdumsfeedback.component.html',
  styleUrls: ['./nachdumsfeedback.component.css']
})
export class NachdumsfeedbackComponent implements OnInit {

    constructor(private apis: ProductService) { }
     feedback = [];
    lien = this.apis.lien
    ngOnInit(): void {
      this.getDatanachdumsfeedback()

    }
    getDatanachdumsfeedback() {
      this.apis.getDatanachdumsfeedback().subscribe((res: any) => {
        this.feedback = res;
      })
    }}

