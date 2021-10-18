import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart  = new Map<number, CartItem>();

  constructor() { }

  addToCart(product: Product, quantity:number) {
    this.cart.set(product.id,new CartItem(product, quantity));
  }

  removeFromCart(product:Product){
    this.cart.delete(product.id);
  }

}

export class CartItem {
  product: Product;
  quantity: number;

  constructor(product:Product, quantity:number){
     this.product = product;
     this.quantity = quantity;
  }
}

