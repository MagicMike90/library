import * as dashboardAction from '../actions/dashboard';
import { Transaction } from '../models/transaction';

export interface State {
  transations: Array<Transaction> | null;
}

export const initialState: State = {
    transations: [],
};

export function reducer(state = initialState, action: dashboardAction.Actions): State {
  switch (action.type) {
    case dashboardAction.GET_TRANSACTIONS: {
      return {
        ...state,
        transations: action.payload.user,
      };
    }

    case dashboardAction.GET_TRANSACTIONS_SUCCESS: {
      return initialState;
    }

    case dashboardAction.GET_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        transations: action.payload.user,
      };
    }
    default: {
      return state;
    }
  }
}

export const getTransations = (state: State) => state.transations;
