# JavaScript Bundling Quickstarts
> How to transpile and bundle your JS - using Webpack, Browserify, Babel or TypeScript

[![Node.js - >=12](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org)


## Featured tools

This project provides a couple of standalone starter samples in the [quickstarts](/quickstarts/) directory. Each can be run locally to demonstrate how to use one or more of these JS tools.

- Webpack - to bundle to a single JS file
- Browserify - to bundle to a single JS file
- Babel - to transpile from modern JS to older JS for compatibility and also handles JSX to JS.
- TypeScript - to transpile from TS to JS

Some sections include an `index.html` to test the JS in the browser.

Most of this project is based on this article - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) (Sitepoint post, 2016). There are other tools covered there which are similar to the ones above. The article says that this area is _complicated_.

If you are looking for a way to do all the bundling and transpiling tasks above and more without installing separate node packages, then consider switching from Node.js to [Deno](https://github.com/MichaelCurrin/dev-cheatsheets/tree/master/cheatsheets/javascript/deno/). It does all that and more.


## Requirements

- Node.js


## Installation

### System dependencies

Install Node.js - follow [gist instructions](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba)

### Clone the repo.

```sh
$ git clone git@github.com:MichaelCurrin/javascript-bundling-quickstarts.git
$ cd javascript-bundling-quickstarts
```

### Install project dependencies

Run this command to install dependencies for _all_ quickstarts. Otherwise skip to the next section to install dependencies for a chosen project.

```sh
$ make install
```


## Usage

Explore the examples in the [quickstarts](/quickstarts/) directory.

To install and run an app, follow these steps:

1. Navigate to a target app. e.g.
    ```sh
    $ cd quickstarts/babel
    ```
2. Install packages.
    ```sh
    $ npm i
    ```
3. Build the app.
    ```sh
    $ npm run build
    ```
4. Test in the browser if relevant, or run the script use `node`.


## Why use these tools?

### Why bundle scripts?

We use a bundler to take modules with dependencies and generate static assets representing those modules.

Features:

- Allows imports with `require('modules')` - whether your own module like `lib.js` or an external NPM package like `lodash`.
- No globals required.
- Source order independence.
- No need for namespacing your own application code.

See [browserify](/quickstarts/browserify/) and [webpack](/quickstarts/webpack/) directories in this project. These compile using CommonJS modules. The output will be the same but with different styles for logging and output.

### Why transpile scripts?

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code or just modern JS to older JS for compatibility. TypeScript also needs transpiling.

See the [babel](/quickstarts/babel/) and [typescript](/quickstarts/typescript) directories.


## Resources

- [JS bundlers](https://michaelcurrin.github.io/dev-resources/resources/javascript/bundlers.html)
- [JS transpilers](https://michaelcurrin.github.io/dev-resources/resources/javascript/transpilers.html)
- [CSS bundlers](https://michaelcurrin.github.io/dev-resources/resources/javascript/css-loaders.html)
- [Live servers](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95)


## Development

### Lint

Install `eslint` globally.

Check for errors and warnings. There will be some warnings but these are okay.

```sh
$ make lint
```

Apply fixes.

```sh
$ make lint-fix
```

Commit and push.


## License

Released under [MIT](/LICENSE).
