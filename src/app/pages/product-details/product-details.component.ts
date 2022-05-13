import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeServiceService } from 'src/app/service/home-service.service';
import { CartHostService } from 'src/app/service/cart-host.service';

import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  sub!: Subscription;
  sub2!: Subscription;

  constructor(private router: ActivatedRoute, private HmSrv: HomeServiceService, private CrtHst: CartHostService) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.sub2 = this.HmSrv.getDetails(id).subscribe((product) =>{
        this.product = product;
      })
    });
  }

  addToCart(product: Product){
    this.CrtHst.addToCart(product);
    this.CrtHst.increaseCounter();
  }

  ngOnDestroy(): void {
    this.sub2.unsubscribe();
    this.sub.unsubscribe();
  }


}
