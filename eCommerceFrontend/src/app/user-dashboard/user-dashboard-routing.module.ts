import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    // path: 'user/dashboard', component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },


      { path: 'products', component: ProductsComponent},
      {path : 'cart', component: CartComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
