import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CartHostService } from 'src/app/service/cart-host.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: Product[];
  total: number = 0;
  completed:boolean = false;
  name!:string;
  address!:string;


  constructor(private CrtHst: CartHostService) { }

  ngOnInit(): void {
    this.completed = false;
    this.cart = this.CrtHst.getCart();
    console.log(this.cart);
    this.totalAmount();
  }

  totalAmount(){
    this.total = 0;
    this.cart.forEach((product: Product) => {
      this.total = this.total + product.price;
    })
  }

  completeOrder(form: NgForm){
    this.completed = true;
    this.name = form.value.name;
    this.address = form.value.address;
    this.cart = this.CrtHst.completeOrder();
    this.CrtHst.resetCounter();
  }

  removeProduct(i: number){
    this.cart = this.CrtHst.removeProduct(i);
    this.totalAmount();
    this.CrtHst.decreaseCounter();
  }

}
