import { Action } from '@ngrx/store';
import { Transaction } from '../models/transaction';

export const GET_TRANSACTIONS = '[Dashboard] Get Transactions';
export const GET_TRANSACTIONS_SUCCESS = '[Dashboard] Login Success';
export const GET_TRANSACTIONS_FAILURE = '[Dashboard] Login Failure';

export class GetTransactions implements Action {
  readonly type = GET_TRANSACTIONS;

  constructor(public payload: Array<Transaction>) {}
}

export class GetTransactionsSuccess implements Action {
  readonly type = GET_TRANSACTIONS_SUCCESS;

  constructor(public payload: Array<Transaction>) {}
}

export class GetTransactionsFailure implements Action {
  readonly type = GET_TRANSACTIONS_FAILURE;

  constructor(public payload: any) {}
}

export type Actions =
  | GetTransactions
  | GetTransactionsSuccess
  | GetTransactionsFailure;
