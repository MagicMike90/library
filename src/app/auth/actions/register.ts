import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user';

export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAILURE = '[Auth] Register Failure';
export const REGISTER_REDIRECT = '[Auth] Register Redirect';


export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: Authenticate) { }
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: { user: any }) { }
}

export class RegisterFailure implements Action {
  readonly type = REGISTER_FAILURE;

  constructor(public payload: any) { }
}

export class RegisterRedirect implements Action {
  readonly type = REGISTER_REDIRECT;
}


export type Actions =
  | Register
  | RegisterSuccess
  | RegisterFailure
  | RegisterRedirect;
