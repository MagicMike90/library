import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  private headers: HttpHeaders;
  private apiEndpoint = 'http://localhost:5000/auth'; // URL to web api

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Application-Names', ['store', 'auth']);
  }

  register(user: Authenticate): any {
    const signInUrl = this.apiEndpoint + '/signup';
    return this.http.post(signInUrl, user, { headers: this.headers });
  }

  login(user: Authenticate): Observable<any> {
    const signInUrl = this.apiEndpoint + '/signin';
    return this.http.post(signInUrl, user, { headers: this.headers });
  }

  logout() {
    return of(true);
  }
}
