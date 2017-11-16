import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as Root from '../../reducers';
import * as transation from './transaction';

export interface DashboardState {
    transations: transation.State;
}

export interface State extends Root.State {
    dasboard: DashboardState;
}

export const reducers = {
    transations: transation.reducer,
};

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardStatusState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.transations
);

export const getTransactions = createSelector(
    selectDashboardStatusState,
    transation.getTransations
);
