import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as transation from './transation';

export interface DashboardState {
    status: transation.State;
}

export interface State extends fromRoot.State {
    dasboard: DashboardState;
}

export const reducers = {
    status: transation.reducer,
};

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardStatusState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.status
  );

export const getTransactions = createSelector(
    selectDashboardStatusState,
    transation.getTransations
  );