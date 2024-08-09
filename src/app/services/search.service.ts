import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');
  searchObservable = this.searchSubject.asObservable();

  search(userId: string) {
    this.searchSubject.next(userId);
  }
}
