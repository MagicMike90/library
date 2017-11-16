import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as Root from '../../reducers';
import * as handleTransaction from './transaction';

export interface DashboardState {
    handleTransactions: handleTransaction.State;
}

export interface State extends Root.State {
    dasboard: DashboardState;
}

export const reducers = {
    handleTransactions: handleTransaction.reducer,
};

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardStatusState = createSelector(
    selectDashboardState,
    (state: DashboardState) => state.handleTransactions
);

export const getTransactions = createSelector(
    selectDashboardStatusState,
    handleTransaction.getTransations
);
