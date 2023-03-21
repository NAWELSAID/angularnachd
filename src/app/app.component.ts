import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nachdittemplate';
  constructor(private apis: ProductService) { }
  tbprofile;
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataprofile()
  }
  getDataprofile() {
    this.apis.getDataprofile().subscribe((res: any) => {
      console.log('res',res)
      this.tbprofile = res;
      
    })
    
  }
}
