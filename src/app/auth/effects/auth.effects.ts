import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { exhaustMap, map, tap, catchError } from "rxjs/operators";
import * as Auth from "../actions/auth";
import * as Registration from "../actions/registration";
import AuthStore from "../auth.store";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthEffects {
  @Effect()
  login = this.actions.pipe(
    ofType(Auth.LOGIN),
    map((action: Auth.Login) => action.payload),
    exhaustMap(auth =>
      this.authService.login(auth).pipe(
        map(user => {
          AuthStore.authenticateUser(user.token);
          return new Auth.LoginSuccess({ user });
        }),
        catchError(error => of(new Auth.LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess = this.actions.pipe(
    ofType(Auth.LOGIN_SUCCESS),
    tap(() => this.router.navigate(["/app/dashboard"]))
  );

  @Effect({ dispatch: false })
  loginRedirect = this.actions.pipe(
    ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT),
    tap(authed => {
      this.router.navigate(["/auth/login"]);
    })
  );

  @Effect()
  register = this.actions.pipe(
    ofType(Registration.REGISTER),
    map((action: Registration.Signup) => {
      console.log("action.payload", action.payload);
      return action.payload;
    }),
    exhaustMap(auth =>
      this.authService
        .register(auth)
        .map(user => {
          AuthStore.authenticateUser(user.token);
          return new Registration.SignupSuccess({ user });
        })
        .catch(error => of(new Registration.SignupFailure(error)))
    )
  );

  @Effect({ dispatch: false })
  registerSuccess = this.actions.pipe(
    ofType(Registration.REGISTER_SUCCESS),
    tap(authed => {
      this.router.navigate(["/app"]);
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
