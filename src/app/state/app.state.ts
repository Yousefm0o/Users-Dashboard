import { LoadingState } from './loading/loading.reducer';
import { UserState } from './user/user.reducer';

export interface AppState {
  users: UserState;
  loading: LoadingState;
}

