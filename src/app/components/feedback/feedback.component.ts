import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  

  constructor(private apis: ProductService) { }
   feedback = [];
  lien = this.apis.lien
  ngOnInit(): void {
    this.getDatafeedback()

  }
  getDatafeedback() {
    this.apis.getDatafeedback().subscribe((res: any) => {
      this.feedback = res;
    })
  }}
  