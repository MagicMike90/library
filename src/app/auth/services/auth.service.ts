import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  private headers : HttpHeaders;
  private api_endpoint = 'http://localhost:5000/auth';  // URL to web api

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type','application/json');
    this.headers.set("Application-Names", ["exampleApp", "proAngular"]);
  }

  login(user: Authenticate) {
    const sign_in_url = this.api_endpoint + "/signin"
    return this.http.post(sign_in_url, JSON.stringify(user), { headers: this.headers });
  }

  logout() {
    return of(true);
  }
}
