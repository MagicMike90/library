import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

// it is expecting susequence action (emit something, i.e promise),
// so have to use map
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import * as Transaction from '../actions/transaction';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class TransactionEffects {
  @Effect()
  getTransations = this.actions.pipe(
    ofType(Transaction.GET_TRANSACTIONS),
    switchMap(() =>
      this.dashboardService.getTransactions().pipe(
        map(payload => {
          return new Transaction.GetTransactionsSuccess(payload.transactions);
        }),
        catchError(error => of(new Transaction.GetTransactionsFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  getTransationsSuccess = this.actions.pipe(
    ofType(Transaction.GET_TRANSACTIONS_SUCCESS),
    tap(payload => payload)
  );

  @Effect({ dispatch: false })
  getTransationsFailure = this.actions.pipe(
    ofType(Transaction.GET_TRANSACTIONS_FAILURE),
    tap(payload => console.log('GET_TRANSACTIONS_FAILURE', payload))
  );

  constructor(
    private actions: Actions,
    private dashboardService: DashboardService,
    private router: Router
  ) {}
}
