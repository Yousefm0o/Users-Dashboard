import { createReducer, on } from '@ngrx/store';
import * as LoadingActions from './loading.actions';

export interface LoadingState {
  isLoading: boolean;  // Indicates if a loading process is ongoing
}

export const initialState: LoadingState = {
  isLoading: false
};

// Reducer function to handle loading state changes
export const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.showLoading, state => ({ ...state, isLoading: true })),
  on(LoadingActions.hideLoading, state => ({ ...state, isLoading: false }))
);
