import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Product } from '../interface/product';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  Url = 'http://localhost:4201'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.Url}/products`);
  }

  getDetails(id:number) {
    return this.http.get<Product>(`${this.Url}/products/${id}`);
  }


}
