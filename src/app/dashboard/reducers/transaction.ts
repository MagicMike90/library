import * as transactionAction from '../actions/transaction';
import { Transaction } from '../models/transaction';

export interface State {
  transations: Array<Transaction> | null;
}

export const initialState: State = {
  transations: [],
};

export function reducer(state = initialState, action: transactionAction.Actions): State {
  switch (action.type) {
    case transactionAction.GET_TRANSACTIONS: {
      return initialState;
    }

    case transactionAction.GET_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transations: action.payload,
      };
    }

    case transactionAction.GET_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        transations: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getTransations = (state: State) => state.transations;
