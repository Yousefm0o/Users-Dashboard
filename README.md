# Dynamic User Dashboard

## Goal
The objective of this project is to demonstrate proficiency in Angular (7+) by creating an interactive user dashboard. The project employs advanced Angular features such as state management (NgRx), directives, and observables. It also emphasizes proper styling, animations, and caching techniques. The usage of UI libraries like Angular Material is permitted.

## Project Setup
- Created a new Angular project using Angular CLI as the foundation.
- Set up the project with Angular 17+ to meet the requirements.

## Page Layout
- Developed a page layout comprising a header and a horizontally centered, paginated users list.
  
## Data Retrieval
- Utilized HTTP endpoints to fetch user data:
  - User card data (including avatar image, first_name, last_name, and id) fetched from `https://reqres.in/api/users?page={page}` for pagination.
  - User details fetched via `https://reqres.in/api/users/{id}`.

## Navigation
- Enabled click functionality on the user cards to navigate to a new page displaying detailed information about the selected user.

## Search Functionality
- Implemented an instant search field within the header to search for users by ID. The search is instant and does not require a separate button.
- Displayed search results and allowed navigation to the user details page if the user exists.

## User Details Page
- Included a back button on each individual user's page to navigate back to the main user list.

## Caching Implementation
- Introduced caching mechanisms using NgRx to avoid redundant HTTP requests, optimizing the application's performance.

## User Experience Enhancements
- Displayed a loading bar to indicate pending network requests, ensuring a smoother user experience during data retrieval.

## State Management
- Employed NgRx for efficient state handling throughout the application.

## Custom Directives
- Implemented custom directives to enhance UI interactions and functionalities.

## Observables and RxJS
- Utilized observables from RxJS to manage asynchronous operations effectively.

## Styling and Animations
- Applied proper styling and animations to enhance the user interface.

## Code Documentation
- Ensured a well-documented and structured project codebase with comments on main functionalities and complex methods.
