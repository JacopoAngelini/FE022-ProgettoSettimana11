import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { errorInterceptor } from './error.interceptor';

const routes:Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: errorInterceptor,
        multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
