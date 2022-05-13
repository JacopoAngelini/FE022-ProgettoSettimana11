import { Component, OnInit } from '@angular/core';
import { CartHostService } from 'src/app/service/cart-host.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter:number = 0;


  constructor(private CrtHst: CartHostService ) { }

  ngOnInit(): void {
    this.CrtHst.sub.subscribe((conta) => {
      this.counter = conta;
    })
  }

  


}
