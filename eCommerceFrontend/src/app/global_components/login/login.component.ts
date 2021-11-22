import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // myGroup form variable to create new FormGroup
  myGroup: FormGroup = new FormGroup({});

  constructor(private router: Router,private fb: FormBuilder) { 

    // checking the validations and error handling for the form fields
     this.myGroup = fb.group({
       mobileNumber: [
         '',
         [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
       ],

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

    // Using this to get the form controls and used in the template view
    get f(){  
      return this.myGroup.controls;  
   }  
      // Used to show the object in the console when login the user
    onLogin(){  
      console.log(this.myGroup.value);  
    }  

  }  
