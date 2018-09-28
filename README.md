Note : https://www.academind.com/learn/javascript/rxjs-6-what-changed/



RxJS 6 (or higher) introduces two important changes compared to RxJS version 5
This command will install a package that ensures backward-compatibility of RxJS. Even though the rxjs package itself would not work with your current code, with the addition of rxjs-compat it will.Behind the scenes, rxjs still supports your old import statements and operator usage but it only does so if it can find the rxjs-compat package in the same project.

Run this : npm install --save rxjs-compat
Run this : npm install bootstrap
-----------------------------------------------------------------------------------------------

# CrmadminUx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

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
