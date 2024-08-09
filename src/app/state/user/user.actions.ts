import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

// Action to load a specific page of users
export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());

// Action dispatched when users are successfully loaded
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[], total: number }>()
);

// Action dispatched when there is an error loading users
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

// Action to load all users
export const loadAllUsers = createAction('[User] Load All Users');

// Action dispatched when all users are successfully loaded
export const loadAllUsersSuccess = createAction(
  '[User] Load All Users Success',
  props<{ users: User[] }>()
);

// Action dispatched when there is an error loading all users
export const loadAllUsersFailure = createAction(
  '[User] Load All Users Failure',
  props<{ error: string }>()
);

// Actions for filtering users
export const filterUsersById = createAction('[User] Filter Users By ID');
export const filterUsersByName = createAction('[User] Filter Users By Name');
