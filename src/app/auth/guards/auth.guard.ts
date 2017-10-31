
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import * as Auth from '../actions/auth';
import * as fromAuth from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>, private router: Router) { 
    console.log('AuthGuard');
  }

  canActivate(): Observable<boolean> {
    console.log('canActivate');
    return this.store
      .select(fromAuth.getLoggedIn)
      .map(authed => {
        if (!authed) {
          console.log('redirect');
          this.store.dispatch(new Auth.LoginRedirect());
          console.log('redirect');
          this.router.navigate(['/Login']);
          return false;
        }
        console.log('redirect');
        return true;
      })
      .take(1);
  }
}
