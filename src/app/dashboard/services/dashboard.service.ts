import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import AuthStore from '../../auth/auth.store';

@Injectable()
export class DashboardService {
    private headers: HttpHeaders;
    private api_endpoint = 'http://localhost:5000/api';  // URL to web api

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Application-Names', ['store', 'auth']);
        this.headers.set('Authorization', 'Bearer ' + AuthStore.getToken());
    }
    getTransactions() : any{}
}
