import { createAction } from '@ngrx/store';

// Action to trigger the display of a loading indicator
export const showLoading = createAction('[Loading] Show Loading');

// Action to hide the loading indicator
export const hideLoading = createAction('[Loading] Hide Loading');
