import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
  allUsers: User[];
  filteredUsers: any[];
  total: number;
  loading: boolean;
  error: string;
}

export const initialState: UserState = {
  users: [],
  allUsers: [],
  filteredUsers: [],
  total: 0,
  loading: false,
  error: ''
};

export const userReducer = createReducer(
  initialState,
  // Handling loadUsers action
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  // Handling loadUsersSuccess action
  on(UserActions.loadUsersSuccess, (state, { users, total }) => ({
    ...state,
    users,
    total,
    loading: false
  })),
  // Handling loadUsersFailure action
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  // Handling loadAllUsers action
  on(UserActions.loadAllUsers, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  // Handling loadAllUsersSuccess action
  on(UserActions.loadAllUsersSuccess, (state, { users }) => ({
    ...state,
    allUsers: users,
    loading: false
  })),
  // Handling loadAllUsersFailure action
  on(UserActions.loadAllUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  // Handling filterUsersById action: sorts users by ID and updates filteredUsers
  on(UserActions.filterUsersById, state => ({
    ...state,
    filteredUsers: state.users.sort((a, b) => a.id - b.id)
  })),
  // Handling filterUsersByName action: sorts users by full name and updates filteredUsers
  on(UserActions.filterUsersByName, state => ({
    ...state,
    filteredUsers: state.users.sort((a, b) => (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name))
  })),
);
