import { Action } from '@ngrx/store';
import { Authenticate } from '../models/user';

export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAILURE = '[Auth] Register Failure';


export class Signup implements Action {
  readonly type = REGISTER;

  constructor(public payload: Authenticate) { }
}

export class SignupSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: { user: any }) { }
}

export class SignupFailure implements Action {
  readonly type = REGISTER_FAILURE;

  constructor(public payload: any) { }
}


export type Actions =
  | Signup
  | SignupSuccess
  | SignupFailure;
