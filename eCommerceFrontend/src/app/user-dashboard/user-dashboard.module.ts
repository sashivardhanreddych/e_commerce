//imports Modules from npm dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

//imports Components from internal dependencies
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

import { FilterPipe } from '../pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  // Imported components
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    DashboardComponent
  ],
  // Imported modules
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule
  ]
})
export class UserDashboardModule { }
