import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  quantity = 1;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    this.quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, this.quantity);
    this.setCart();
  }
}