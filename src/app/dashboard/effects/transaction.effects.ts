import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import * as Transaction from '../actions/transaction';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class TransactionEffects {
  @Effect()
  getTransations = this.actions
    .ofType(Transaction.GET_TRANSACTIONS)
    .mergeMap(action =>
      this.dashboardService
        .getTransactions()
        .map(payload => {
          return new Transaction.GetTransactionsSuccess(payload.transactions);
        })
        .catch(error => of(new Transaction.GetTransactionsFailure(error)))
    );

  @Effect({ dispatch: false })
  getTransationsSuccess = this.actions
    .ofType(Transaction.GET_TRANSACTIONS_SUCCESS)
    .do(payload => payload);

  @Effect({ dispatch: false })
  getTransationsFailure = this.actions
    .ofType(Transaction.GET_TRANSACTIONS_FAILURE)
    .do(payload => console.log('GET_TRANSACTIONS_FAILURE', payload));

  constructor(
    private actions: Actions,
    private dashboardService: DashboardService,
    private router: Router
  ) {}
}
