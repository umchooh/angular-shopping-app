import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { MessengerService } from '../services/messenger.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
 productList: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  //When component's HTML all loaded completely, then load the productList ( which start with empty array on line 12, then call the list thru getProducts method)
  ngOnInit() {
    this.productList =this.productService.getProducts()
  }
}
