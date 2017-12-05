# Requirements

Let's pretend we want to sell books online (like Amazon). As a first step we want to build a site that lists books displaying the book cover image, title, author, open library Id number (OLID), and price.

We'd also like a form that allows us to filter (on the server side) by the book's title or OLID. If searching by OLID we should validate it before we send it to our server. If it's not a valid OLID then we can assume it's a title.

The API to get the list of books we want to sell is available here https://goo.gl/Lk2MTJ. There is an example of the API response in the `books.json` file to ease development, but we should fetch a fresh copy from the API each time. Note that the API doesn't provide pricing. We'll have to add that later.

Finally, we’d like the front-end to be styled to match the following design. The designer forgot to add the OLID number to the mockup.

![Design](design.jpg)

# BookStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## My solution

As I had done the filtering on the client side, we pair programmed a couple hours, nearly completing the filtering server side with unit tests.
I noticed the API data was unpurposely missing an author, so I chose to display `[Author missing!]`.

## Hapi server

Run `npm start` for a hapi server. This will also build the project beforehand. Navigate to `http://localhost:3000/`. The node app will automatically reload if you change any of the source files in the root directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the Angular source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm test` or `mocha test` to execute the unit tests via [Mocha](https://github.com/mochajs/mocha).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
