import { Component } from '@angular/core';
import { Product } from '../Shared/Models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product!:Product
  constructor(private activatedRoute:ActivatedRoute, private productService: ProductService, private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.product = productService.getProductById(params['id'])
      }
    })
  }
  ngOnInit():void{

  }
  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
