import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AuthStore from '../../auth/auth.store';

@Injectable()
export class DashboardService {
  private headers: HttpHeaders;
  private transactionEndpoint = 'http://localhost:5000/api/transaction/report'; // URL to web api

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Application-Names', [
      'store',
      'dashboard'
    ]);
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + AuthStore.getToken()
    );
  }
  getTransactions(): Observable<any> {
    return this.http.get(this.transactionEndpoint, { headers: this.headers });
  }
}
