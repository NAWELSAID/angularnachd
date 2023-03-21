import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private apis: ProductService) { }
  posts = [];
  lien = this.apis.lien;
  ngOnInit(): void {
    this.getDataLastposts()
  }
  getDataLastposts() {
    this.apis.getDataLastposts().subscribe((res: any) => {
      this.posts = res;
    })
  }
}
