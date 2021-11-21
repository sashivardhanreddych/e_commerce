import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Imported components from Internal dependencies
import { AppComponent } from './app.component';
import { SignupComponent } from './global_components/signup/signup.component';
import { LoginComponent } from './global_components/login/login.component';
import { ChangepasswordComponent } from './global_components/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './global_components/forgotpassword/forgotpassword.component';

import { UserDashboardModule} from './user-dashboard/user-dashboard.module';



// Imports from the primeNg
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserDashboardModule,

    //primeNg modules
    PasswordModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
