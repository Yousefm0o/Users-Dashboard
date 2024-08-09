import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private sortCriteriaSubject = new BehaviorSubject<string>('id');
  sortCriteria$ = this.sortCriteriaSubject.asObservable();

  setSortCriteria(criteria: string): void {
    this.sortCriteriaSubject.next(criteria);
  }

  getSortCriteria(): string {
    return this.sortCriteriaSubject.getValue();
  }
}
