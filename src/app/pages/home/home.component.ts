import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products!: Product[];
  sub!: Subscription

  constructor(private HmSrv: HomeServiceService) { }

  ngOnInit(): void {
    this.sub = this.HmSrv.getProducts().subscribe((arg: Product[]) => {
      this.products = arg;
      console.log(this.products);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
