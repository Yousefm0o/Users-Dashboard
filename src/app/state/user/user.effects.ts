import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import * as LoadingActions from '../loading/loading.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store
  ) {}

  // Effect for loading users of a specific page
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(action => {
        this.store.dispatch(LoadingActions.showLoading());
        return this.userService.getUsers(action.page).pipe(
          map(response => {
            this.store.dispatch(LoadingActions.hideLoading());
            return UserActions.loadUsersSuccess({ users: response.data, total: response.total });
          }),
          catchError(error => {
            this.store.dispatch(LoadingActions.hideLoading());
            return of(UserActions.loadUsersFailure({ error: error.message }));
          })
        );
      })
    )
  );

  // Effect for loading all users
  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadAllUsers),
      mergeMap(() => {
        this.store.dispatch(LoadingActions.showLoading());
        return this.userService.getAllUsers().pipe(
          map(users => {
            this.store.dispatch(LoadingActions.hideLoading());
            return UserActions.loadAllUsersSuccess({ users });
          }),
          catchError(error => {
            this.store.dispatch(LoadingActions.hideLoading());
            return of(UserActions.loadAllUsersFailure({ error: error.message }));
          })
        );
      })
    )
  );
}
