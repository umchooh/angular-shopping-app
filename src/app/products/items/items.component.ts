import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() productItem !: Product;

  value = 0;

  handleMinus() {
    this.value--;
    this.productItem.quantity++; 
  }
  handlePlus() {
    this.value++;
    this.productItem.quantity--;    
  }

  addToCart() {
    this.cartService.addToCart(this.productItem, this.value);
  }

  
    

  
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }

}
