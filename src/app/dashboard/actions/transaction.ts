import { Action } from '@ngrx/store';
import { Transaction } from '../models/transaction';

export const GET_TRANSACTIONS = '[Dashboard - Transaction] Get Transactions';
export const GET_TRANSACTIONS_SUCCESS = '[Dashboard - Transaction] Get Transactions Success';
export const GET_TRANSACTIONS_FAILURE = '[Dashboard - Transaction] Get Transactions Failure';

export class GetTransactions implements Action {
  readonly type = GET_TRANSACTIONS;

  constructor() {}
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
