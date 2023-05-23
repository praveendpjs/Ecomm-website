import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../Shared/Models/Cart';
import { CartItem } from '../Shared/Models/CartItem';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart()
  }
  ngOnInit(): void{

  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }

}
