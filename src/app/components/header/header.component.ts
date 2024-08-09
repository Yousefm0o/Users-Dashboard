import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SortService } from '../../services/sort.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchService: SearchService = inject(SearchService);
  sortCriteria: string = 'id'; // Default sort criteria

  showHeader: boolean = true;
  private routerSubscription: Subscription | undefined;

  constructor(private _sortService: SortService, private _router: Router) {}

  // Trigger search in SearchService when input value changes
  onSearch(e: any) {
    const searchUser = e.target.value.trim();
    this.searchService.search(searchUser);
  }

  ngOnInit(): void {
    // Subscribe to router events to hide header on user details pages
    this.routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.urlAfterRedirects.startsWith('/user/');
      }
    });

    // Subscribe to sort criteria changes
    this._sortService.sortCriteria$.subscribe(criteria => {
      this.sortCriteria = criteria;
    });
  }

  // Update sort criteria in SortService based on user selection
  onSortChange(event: any): void {
    const criteria = event.target.value;
    this._sortService.setSortCriteria(criteria);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
