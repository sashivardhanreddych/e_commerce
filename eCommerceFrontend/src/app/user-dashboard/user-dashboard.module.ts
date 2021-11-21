import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule
  ]
})
export class UserDashboardModule { }
