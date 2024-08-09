import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any; // Holds the user details
  userId: string | undefined | null; // ID of the user to be fetched
  routeSubscription: Subscription | undefined; // Subscription to route parameters
  userSubscription: Subscription | undefined; // Subscription to user data

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {}

  // Fetch user details based on route parameter
  ngOnInit(): void {
    this.routeSubscription = this._route.paramMap.subscribe((data) => {
      this.userId = data.get('id'); // Get user ID from route params
      this.userSubscription = this._userService.getUserById(this.userId).subscribe((response) => {
        this.user = response.data; // Assign fetched user data to component property
      });
    });
  }

  // Navigate back to the home page
  goBack(): void {
    this._router.navigate(['/']);
  }
}
