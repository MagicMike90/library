import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import * as Auth from '../actions/auth';
// import * as fromAuth from '../reducers';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private store: Store<fromAuth.State>) {}

//   canActivate(): Observable<boolean> {
//     return this.store
//       .select(fromAuth.getLoggedIn)
//       .map(authed => {
//         if (!authed) {
//           this.store.dispatch(new Auth.LoginRedirect());
//           return false;
//         }

//         return true;
//       })
//       .take(1);
//   }
// }
