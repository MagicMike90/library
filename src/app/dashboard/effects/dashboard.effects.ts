import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { DashboardService } from '../services/dashboard.service';
import * as DashboardAction from '../actions/dashboard';


@Injectable()
export class DashboardEffects {
  @Effect()
  getTransations = this.actions
    .ofType(DashboardAction.GET_TRANSACTIONS)
    .map((action: DashboardAction.GetTransactions) => action.payload)
    .exhaustMap(transations =>
      this.dashboardService
        .getTransactions()
        .map(transations => {
          return new DashboardAction.GetTransactionsSuccess(transations)
        })
        .catch(error => of(new DashboardAction.GetTransactionsFailure(error)))
    );

  @Effect({ dispatch: false })
  getTransationsSuccess = this.actions
    .ofType(DashboardAction.GET_TRANSACTIONS_SUCCESS)
    .do(() => this.router.navigate(['/app/dashboard']));

  @Effect({ dispatch: false })
  getTransationsFailure = this.actions
    .ofType(DashboardAction.GET_TRANSACTIONS_FAILURE)
    .do(authed => {
      this.router.navigate(['/auth/login']);
    });

  constructor(
    private actions: Actions,
    private dashboardService: DashboardService,
    private router: Router
  ) { }
}
