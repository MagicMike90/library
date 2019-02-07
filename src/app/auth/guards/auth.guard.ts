import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as Auth from '../actions/auth';
import AuthStore from '../auth.store';
import * as fromAuth from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(authed => {
        // if (!authed) {
        if (!AuthStore.isUserAuthenticated()) {
          this.store.dispatch(new Auth.LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
