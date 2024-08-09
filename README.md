# Dynamic User Dashboard

## Goal
Demonstrate Angular (7+) skills by creating an interactive user dashboard using state management, directives, observables, and caching.

## Project Setup
- Built with Angular CLI (17+).

## Page Layout
- Header with a centered, paginated user list.

## Data Retrieval
- Fetched user data from `https://reqres.in/api/users?page={page}` and user details from `https://reqres.in/api/users/{id}`.

## Navigation
- Clickable user cards allow you to navigate to detailed user info pages.

## Search & Sort Functionality
- Instant search by ID.
- Sorting by ID or Name after search.

## User Details Page
- Back button for returning to the user list.

## Caching
- Implemented with NgRx to reduce redundant HTTP requests.

## Enhancements
- Loading bar for smoother data retrieval.
- Custom directives, RxJS observables, and animations for improved UX.
