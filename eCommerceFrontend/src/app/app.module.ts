// Imports Modules from npm dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { UserDashboardModule} from './user-dashboard/user-dashboard.module';

// Imports components from Internal dependencies
import { AppComponent } from './app.component';
import { SignupComponent } from './global_components/signup/signup.component';
import { LoginComponent } from './global_components/login/login.component';
import { ChangepasswordComponent } from './global_components/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './global_components/forgotpassword/forgotpassword.component';


// imports modules from angular material
import { MatSidenavModule } from '@angular/material/sidenav';



// Imports from the primeNg
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from "primeng/divider";

@NgModule({
  // Imported components
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
  ],
  // Imported Internal Modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDashboardModule,

    // Angular material
    MatSidenavModule,

    //primeNg modules
    InputTextModule,
    ToastModule,
    PasswordModule,
    DividerModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
