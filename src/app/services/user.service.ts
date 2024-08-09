import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable, range, toArray } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  // Fetch a paginated list of users
  getUsers(page: number): Observable<{ data: User[], total: number }> {
    return this.http.get<{ data: User[], total: number }>(`${this.apiUrl}?page=${page}`);
  }

  // Fetch all users by making multiple requests (one for each page)
  getAllUsers(): Observable<User[]> {
    return this.http.get<{ data: User[], total_pages: number }>(`${this.apiUrl}?page=1`).pipe(
      mergeMap(response => {
        const totalPages = response.total_pages;

        // Create observables for each page request
        const pageRequests = range(1, totalPages).pipe(
          mergeMap(page => this.getUsers(page))
        );

        // Merge all page requests and collect all user data into an array
        return pageRequests.pipe(
          mergeMap(response => response.data),
          toArray() // Combine all user data into a single array
        );
      })
    );
  }

  // Fetch a single user by ID for the user-details page
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
