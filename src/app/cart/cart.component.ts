import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem, CartService } from '../services/cart.service';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartItems!: CartItem[];

  cartTotal = 0;
 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = [... this.cartService.cart.values()];
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.product.price);
    });

  }


}
