import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) { }

  getIsAuth() {
    return this.isAuthenticated;
  }

  signup(fullName: string, username: string, password: string) {
    let full_Name = fullName;
    let user_Name = username;
    let pass_word = password;

    const signArr = {fullName: full_Name, username: user_Name, password: pass_word};
    console.log(signArr);
    this.http.post<{post_id: string, message: string}>('http://localhost:3000/users/signup', signArr)
    .subscribe(response => {
      console.log(response.message);
      if (response.message === 'Error: User already exists!') {
        alert('This username is already in use!');
        if(confirm) {
          location.reload();
        }
      } else {
        console.log(response.message + ', ' + response.post_id);
        this.router.navigate(['/login']);
      }
    });
  }

  login(username: string, password: string) {
    let user_Name = username;
    let pass_word = password;

    let logArr = {username: user_Name, password: pass_word};
    this.http.post<{ token: string, expiresIn: number, userId: string, message: string}>('http://localhost:3000/users/login', logArr)
    .subscribe(response => {
      console.log(response.message);
      const token = response.token;
      this.token = token;
      if(token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response.userId;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration*1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, this.userId);
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  private setAuthTimer(duration: number) {
    console.log('Time is set. You have: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration*1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  private clearAuthData() {
    localStorage.clear();
  }
}
