// Imports from angular dependencies
import { Component, OnInit } from '@angular/core';
// import { NgForm }   from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  /**
   * Used to send the data when submit button is clicked 
   * @param x userdata
   * @returns String
   */
  onSubmit(x:any) {
    console.log("signup");
    alert(x);
    
  }
}
