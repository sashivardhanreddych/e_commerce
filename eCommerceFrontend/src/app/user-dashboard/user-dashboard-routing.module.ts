//imports Modules from npm dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//imports Components from internal dependencies
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

// Routes Array to navigate from one page to another page.
const routes: Routes = [
  // {
  //   path: 'user/dashboard', component: HeaderComponent,
  //   children: [
  //     { path: '', redirectTo: 'products', pathMatch: 'full' },
  //     { path: 'products', component: ProductsComponent},
  //     { path : 'cart', component: CartComponent}
  //   ]
  // }
  { path : '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path : 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductsComponent},
  { path : 'cart', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
