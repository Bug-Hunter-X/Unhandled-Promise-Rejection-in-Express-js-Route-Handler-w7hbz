# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  When an asynchronous operation within a route handler throws an error, and that error is not properly caught, the server will crash without providing informative error messages.

## Bug
The `bug.js` file shows an Express.js server with a route handler that performs an asynchronous operation. This operation has a 50% chance of failing and throwing an error.  The error is logged to the console, but crucially, **it is not handled**, leading to the server's termination.

## Solution
The `bugSolution.js` file presents a corrected version. It uses a `try...catch` block to gracefully handle the potential error within the asynchronous operation, preventing server crashes and providing more robust error handling.  Additionally, it demonstrates the use of Express's built-in error handling middleware for centralized error management, providing consistent error responses to the client.

## How to reproduce
1. Clone the repository
2. Navigate to the repository's directory
3. Run `node bug.js` (observe the crash behaviour).
4. Run `node bugSolution.js` (observe the improved error handling).