import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

// Selector to access the loading state from the app state
const selectLoadingState = (state: AppState) => state.loading;

// Selector to get the current loading status
export const selectIsLoading = createSelector(
  selectLoadingState,
  (loadingState) => loadingState.isLoading
);
