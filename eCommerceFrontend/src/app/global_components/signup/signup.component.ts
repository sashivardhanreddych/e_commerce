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
  
  onSubmit(x:any) {
    console.log("signup");
    alert(x);
    
  }
}
