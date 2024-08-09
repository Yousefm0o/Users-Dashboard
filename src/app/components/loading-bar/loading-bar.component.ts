import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { selectIsLoading } from '../../state/loading/loading.selectors';

@Component({
  selector: 'loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {
  isLoading$: Observable<boolean>; // Observable for loading state

  constructor(private store: Store<AppState>) {}

  // Initialize observable to track loading state
  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
  }
}
