import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/service/product.service';
import { TranslateServiceService } from 'src/app/translate-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  constructor(private apis: ProductService,public translate:TranslateService) { }
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
