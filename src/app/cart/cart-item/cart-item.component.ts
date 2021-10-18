import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
