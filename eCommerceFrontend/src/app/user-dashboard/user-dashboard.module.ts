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
import { NavbarComponent } from './navbar/navbar.component';


// imports modules from angular material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  // Imported components
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    DashboardComponent,
    NavbarComponent,
  ],
  // Imported modules
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule,

    // angular material modules
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
})
export class UserDashboardModule {}
