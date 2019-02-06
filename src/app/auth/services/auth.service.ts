import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  private headers: HttpHeaders;
  private api_endpoint = 'http://localhost:5000/auth'; // URL to web api

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Application-Names', ['store', 'auth']);
  }

  register(user: Authenticate): any {
    const sign_in_url = this.api_endpoint + '/signup';
    return this.http.post(sign_in_url, user, { headers: this.headers });
  }

  login(user: Authenticate): any {
    const sign_in_url = this.api_endpoint + '/signin';
    return this.http.post(sign_in_url, user, { headers: this.headers });
  }

  logout() {
    return of(true);
  }
}
