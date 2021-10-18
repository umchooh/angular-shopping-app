import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    {
      id: 1,
      name: 'Apple',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/apple.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 2,
      name: 'Watermelon',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/watermelon.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 3,
      name: 'Lemon',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/lemon.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 4,
      name: 'Orange',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/orange.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 5,
      name: 'Mangosteen',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/mangosteen.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 6,
      name: 'Durian',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/durian.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 7,
      name: 'Pineapple',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/pineapple.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 8,
      name: 'Pear',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/pear.jpg',
      price: 10,
      quantity: 10
    },
    {
      id: 9,
      name: 'Kiwi',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/kiwi.jpg',
      price: 10,
      quantity: 10 
    },
    {
      id: 10,
      name: 'Mango',
      description: 'Learn the fundamentals of Angular 9',
      imageSRC:'assets/images/mango.jpg',
      price: 10,
      quantity: 10 
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
