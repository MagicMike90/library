import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import AuthStore from '../../auth/auth.store';

@Injectable()
export class DashboardService {
    private headers: HttpHeaders;
    private transaction_endpoint = 'http://localhost:5000/api/transaction';  // URL to web api

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers =  this.headers.set('Content-Type', 'application/json');
        this.headers =  this.headers.set('Application-Names', ['store', 'dashboard']);
        this.headers =  this.headers.set('Authorization', 'Bearer ' + AuthStore.getToken());
        console.log('DashboardService', this.headers.keys());
    }
    getTransactions(): any {
        return this.http.get(this.transaction_endpoint, { headers: this.headers });
    }
}
