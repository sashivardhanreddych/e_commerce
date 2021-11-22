import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  myGroup: FormGroup = new FormGroup({});

  constructor(private router: Router,private fb: FormBuilder) { 
     this.myGroup = fb.group({
       mobileNumber: [
         '',
         [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
       ],

       // password: [ '', Validators.compose([ Validators.required, CustomValidators.patternValidator(/\d/, { hasNumber: true }),
       //    CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
       //    CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
       //    CustomValidators.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>), { hasSpecialCharacters: true }),
       //    Validators.minLength(8)])

       password: [
         '',
         [
           Validators.required,
           Validators.pattern(
             '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
           ),
         ],
       ],
     });
  }
    get f(){  
      return this.myGroup.controls;  
   }  
    onLogin(){  
      console.log(this.myGroup.value);  
    }  

  }  
    // navigateTo() {
    //   this.router.navigateByUrl('/forgotpassword');
    // }

