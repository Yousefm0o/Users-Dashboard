Dynamic User Dashboard
Goal
This project demonstrates proficiency in Angular (7+) by creating an interactive user dashboard that incorporates advanced Angular features such as state management (NgRx), directives, and observables. The project emphasizes proper styling, animations, and caching techniques to enhance user experience and performance.

Task Specifications
Project Setup
Created a new Angular 17.3.1 project using Angular CLI as the foundation.
Page Layout
Developed a responsive page layout with a header and a horizontally centered, paginated users list.
Data Retrieval
Implemented data fetching using the following endpoints:
User cards: https://reqres.in/api/users?page={page}
Single user details: https://reqres.in/api/users/{id}
Navigation
Enabled click functionality on user cards to navigate to a detailed information page for the selected user.
Search Functionality
Implemented an instant search field within the header to search users by ID. Results are displayed immediately, allowing navigation to the user details page if the user exists.
User Details Page
Included a back button on the individual user details page to return to the main user list.
Caching Implementation
Introduced caching mechanisms to prevent redundant HTTP requests, optimizing application performance.
User Experience Enhancements
Added a loading bar to indicate pending network requests, ensuring a smooth user experience during data retrieval.
Additional Considerations
Used NgRx for efficient state management.
Implemented custom directives to enhance UI interactions.
Managed asynchronous operations with RxJS observables.
Applied proper styling and animations for an enhanced user interface.
The project codebase is well-documented and structured for clarity.
