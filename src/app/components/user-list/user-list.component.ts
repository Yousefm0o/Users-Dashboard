import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { User } from '../../models/user.model';
import * as UserActions from '../../state/user/user.actions';
import { SortService } from '../../services/sort.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = []; // List of all users
  filteredUsers: User[] = []; // List of users filtered and sorted
  allUsers: User[] = []; // List of all users to be used in the search functionality
  singlePageUsers: number | undefined; // Total number of users on the current page
  currentSort: string = 'id'; // Current sorting criteria
  usersSubscription: Subscription | undefined;
  searchSubscription: Subscription | undefined;
  stateSubscription: Subscription | undefined;
  sortSubscription: Subscription | undefined;

  constructor(
    private _store: Store<AppState>,
    private _router: Router,
    private _searchService: SearchService,
    private _sortService: SortService
  ) {}

  ngOnInit(): void {
    // Load users and all users from the store
    this._store.dispatch(UserActions.loadUsers({ page: 1 }));
    this._store.dispatch(UserActions.loadAllUsers());

    // Subscribe to user state changes from the store
    this.stateSubscription = this._store.select('users').subscribe(state => {
      this.users = state.users;
      this.allUsers = state.allUsers;
      this.singlePageUsers = state.total;
      this.sortUsers(); // Sort users initially
    });

    // Subscribe to search term changes
    this.searchSubscription = this._searchService.searchObservable.subscribe(searchTerm => {
      this.onSearch(searchTerm);
    });

    // Subscribe to sorting criteria changes
    this.sortSubscription = this._sortService.sortCriteria$.subscribe(criteria => {
      this.currentSort = criteria; // Update current sort criteria
      this.sortUsers(this.currentSort); // Resort users based on new criteria
    });
  }

  // Handle page changes, and reset sort criteria
  onPageChange(e: any): void {
    this._store.dispatch(UserActions.loadUsers({ page: e.pageIndex + 1 }));
    this._sortService.setSortCriteria('id'); // Reset sort criteria to default 'id'
  }

  // Navigate to user details page
  viewUser(id: number): void {
    this._router.navigate(['/user', id]);
  }

  // Filter and sort users based on search term
  onSearch(searchUser: string): void {
    if (searchUser) {
      this.filteredUsers = this.allUsers.filter(user => user.id.toString() === searchUser);
    } else {
      this.sortUsers(this.currentSort); // Render the current page users and resort them according to the current resort criteria
    }
  }

  // Sort users based on the specified criteria
  sortUsers(sortCriteria: string = 'id'): void {
    if (sortCriteria === 'id') {
      this.filteredUsers = [...this.users].sort((a, b) => a.id - b.id); // Sort by ID
    } else if (sortCriteria === 'name') {
      this.filteredUsers = [...this.users].sort((a, b) => {
        // Sort by full name (first_name and last_name)
        const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
        const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }
  }

  // Clean up subscriptions to prevent memory leaks
  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
    if (this.sortSubscription) {
      this.sortSubscription.unsubscribe();
    }
  }
}
