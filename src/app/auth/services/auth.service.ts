import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private api_endpoint = 'http://localhost:5000/api/heroes';  // URL to web api

  constructor(private http: HttpClient) { }

  // login({ username, password }: Authenticate) {
  //   /**
  //    * Simulate a failed login to display the error
  //    * message for the login form.
  //    */
  //   // if (username !== 'test') {
  //   //   return _throw('Invalid username or password');
  //   // }

  //   return of({ name: 'User' });
  // }
  login(user: Authenticate) {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    // if (username !== 'test') {
    //   return _throw('Invalid username or password');
    // }
    return this.http.post(this.api_endpoint, JSON.stringify(user), { headers: this.headers });
    // return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
