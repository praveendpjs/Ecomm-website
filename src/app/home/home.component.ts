import { Component } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { Product } from '../Shared/Models/Product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:Product[] = [];
  NotFoundMessage:String=""
  constructor(private ProductService:ProductService, private route:ActivatedRoute){} // Now you can have instance of this product service without using new or anything
  ngOnInit(): void{
    this.route.params.subscribe(params=>{ //This says when params is changed do the following thing in subscribe function
      if(params['searchTerm']){
        this.products = this.ProductService.getAll().filter(Product => Product.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else if(params['tag']){
        this.products = this.ProductService.getAllProductsByTag(params['tag'])
      }
      else{
        this.products = this.ProductService.getAll();
      }

    })
    // this.products = this.ProductService.getAll();
  }
}
