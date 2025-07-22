import { createStore } from 'redux';

//State type
export interface CounterState {
  count: number;
}

// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';

export interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

const initialState: CounterState = { count: 0 };

function counterReducer(state = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
