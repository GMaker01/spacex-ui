# SpaceX UI
This project is a UI prototype made in angular for one of the client. In this project SpaceX open API is used to showcase the rocket launches.

## Technology Stack
**Frontend**: Angular 10
**UI Library**: CSS3

[Site URL](https://stoic-thompson-eb041f.netlify.app "Click here to navigate to Site")

## Understanding

Need to show list of all the SpaceX launches. Approach:
1. Responsive Mobile First Approach
2. Api with Interceptors
3. Loader when Api is called
4. Multi Level filter: launch_success, land_success, launch_year
5. Data Parsing: land_success is checked from `rocket.first_stage`



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
