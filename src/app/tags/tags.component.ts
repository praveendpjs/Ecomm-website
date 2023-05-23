import { Component, Input } from '@angular/core';
import { Tag } from '../Shared/Models/Tag';
import { ProductService } from '../service/product/product.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  productPageTags?:string[];
  tags:Tag[] = [];
  constructor(private productService:ProductService){}
  ngOnInit():void{
    if(!this.productPageTags){
      this.tags = this.productService.getAllTags()
    }
  }
}
