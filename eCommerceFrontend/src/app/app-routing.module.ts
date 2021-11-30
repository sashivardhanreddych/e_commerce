import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports components from internal dependencies
import { LoginComponent } from './global_components/login/login.component';
import { SignupComponent } from './global_components/signup/signup.component';
import { ForgotpasswordComponent } from './global_components/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './global_components/changepassword/changepassword.component';



const routes: Routes = [
  { path: '', redirectTo: 'users/login', pathMatch: 'full' },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/signup', component: SignupComponent },
  { path: 'users/forgotpassword', component: ForgotpasswordComponent },
  { path: 'users/changepassword', component: ChangepasswordComponent }
  // { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
