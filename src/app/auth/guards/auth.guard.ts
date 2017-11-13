
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import * as Auth from '../actions/auth';
import * as fromAuth from '../reducers';
import AuthStore from '../auth.store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select(fromAuth.getLoggedIn)
      .map(authed => {
        // if (!authed) {
        if (!AuthStore.isUserAuthenticated()) {
          this.store.dispatch(new Auth.LoginRedirect());
          return false;
        }
        return true;
      })
      .take(1);
  }
}
