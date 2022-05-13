import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { Subject, throwError } from 'rxjs';


let cart:Product[] = [];

@Injectable({
  providedIn: 'root'
})
export class CartHostService {
  sub = new Subject<number>();
  counter: number = 0;

  constructor() { }

  addToCart(product: Product) {
    cart.push(product);
  }

  getCart(){
    return cart;
  }

  completeOrder() {
    cart = [];
    return cart;
  }

  removeProduct(i: number){
    cart.splice(i, 1);
    return cart
  }

  increaseCounter() {
    this.counter ++;
    this.sub.next(this.counter);
  }

  decreaseCounter() {
    this.counter --;
    this.sub.next(this.counter);
  }

  resetCounter(){
    this.counter = 0;
    this.sub.next(this.counter);
  }
}
