import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }
  // newPassword: string = null;
  // confirmPassword: string = null;
  ngOnInit(): void {
  }

  onSubmit() {
    console.log("newPassword");
  }


}
