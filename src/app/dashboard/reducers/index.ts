import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as Root from '../../reducers';
import * as transation from './transaction';

export interface DashboardState {
    status: transation.State;
}

export interface State extends Root.State {
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
