import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  apiBaseUrl: string = environment.apiBaseUrl;

  changePasswordUrl = this.apiBaseUrl + 'generic/changePassword';
  resetUrl = this.apiBaseUrl + 'generic/resetPassword';
  forgotUrl = this.apiBaseUrl + 'generic/forgotPassword';
  loginUrl = this.apiBaseUrl + 'generic/login';
  registerUrl = this.apiBaseUrl + 'api/signup';
  presentUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Declaring isLoggedin and creating a subject
  isLoggedin = false;
  public loggedInSubject = new Subject<boolean>();

  // setLoggedin used to tell a user login 
  setLoggedin(value: boolean) {
    this.loggedInSubject.next(value);
  }
  // register user to send the data to server
  registerUser(userObj:any) {
    return this.http.post<any>(this.registerUrl, userObj);
  }

  loginUser(userObj:any) {
    return this.http.post<any>(this.loginUrl, userObj);
  }

  saveToken(token: string) {
    localStorage.setItem('SCART', token);
  }
  removeToken() {
    localStorage.removeItem('SCART');
  }
  getToken(token: string) {
    return localStorage.getItem('SCART');
  }
  onForgot(userObj:any) {
    return this.http.post<any>(this.forgotUrl, userObj);
  }
  onReset(userObj:any, token: string) {
    this.resetUrl = this.resetUrl + '/' + token;
    console.log(this.resetUrl);
    return this.http.patch<any>(this.resetUrl, userObj);
  }
  onChangePassword(userObj:any) {
    return this.http.patch<any>(this.changePasswordUrl, userObj);
  }
  isAuthenticated(): boolean {
    console.log('in global service authGuard');

    if (
      localStorage.getItem('SCART') == undefined ||
      localStorage.getItem('SCART') == null
    ) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }

  logout() {
    this.removeToken();
    this.isLoggedin = false;
    this.router.navigateByUrl('/login');
    this.setLoggedin(false);
  }

}
