import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  public loggedIn() {
    return tokenNotExpired('id_token');
  }

  public logOut() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

  public storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

}