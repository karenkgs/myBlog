# Template project for creating TS libraries

> This template has boilerplate code for a simple TypeScript/nodeJS application

This project is made with:
* Typescript
* Jest
* ESLint
* Prettier
* npm

## Want to contribute?

* If you want to help us improve, take a minute to read the [Contribution Guidelines](/CONTRIBUTING.md) first.


## Usage

### Creating a project using this template

After you clone this repo to your desktop, take a look in the existing files. If you want to run the tests and build, go to its root directory and run `npm install`.

To implement your library, you should change the following files:
* `HelloWorld.ts`
* `HelloWorld.test.ts`
* `index.ts`

After you're happy with your changes, update this `README.md` with you actual library description, don't forget to describe:
* how to build your project
* how to run the tests
* Changelog - Optional to list changes made to the library
* ADR - Optional file to explain any important architectural decisions

You can publish your library, and upon a change bump the version `npm version patch -m "Upgrade to %s for reasons"`, see more about versioning [here](https://docs.npmjs.com/cli/version.html).

### Scripts available in this template

### Build

`tsc` or `npm run build`

### Tests

`npm test` - Runs all tests
`npm run test:unit` - Runs unit tests only
`npm run test:integration` - Runs integration tests only

### Linting

`npm run lint`

## Changelog

## Architectural decisions records
