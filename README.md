# Javascript Bundling Quickstarts
> How to bundle your JS and get a single script to load on the frontend


## Featured tools

There are standalone examples in this project to demonstrate one or more of these to bundle and transpile (if needed) the JS

- Webpack
- Browserify
- Babel (process ES6)
- TypeScript


## About

Most of this project is based on this article - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) (Sitepoint post, 2016)

Explore the examples in the [quickstarts](/quickstarts/) directory. 

To run the apps locally:

1. Install Node.js 
    - Follow [instructions](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba)
1. Clone the repo.
1. Navigate to a target app. e.g.
    ```sh
    $ cd quickstarts/babel
    ```
1. Follow the `README.md` instructions at that level to install and run the app.


## Why?

### Why bundle scripts?

We use a bundler to take modules with dependencies and generate static assets representing those modules.

Features:

- Allows imports with `require('modules')` - whether your own module like `lib.js` or an external NPM package like `lodash`.
- No globals required.
- Source order independence.
- No need for namespacing your own application code.

See [browserify](/quickstarts/browserify/) and [webpack](/quickstarts/webpack/) directories in this project. These compile using CommonJS modules. The output will be the same but with different styles for logging and output.


### Why transpile scripts?

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code or just modern JS to older JS for compatability. TypeScript also needs transpiling.

See the [babel](/quickstarts/babel/) and [typescript](/quickstarts/typescript) directories.


## Resources

### Bundlers

JS bundlers:

- [Webpack](http://webpack.github.io/)
    - [Getting started with Webpack](webpack.github.io/docs/tutorials/getting-started/)
    - [Concepts](https://webpack.js.org/concepts)
- [Browserify](http://browserify.org/)
- [JSPN](http://jspm.io/)
- [Rollup](http://rollupjs.org/)
- [Brunch](http://brunch.io/) / [Brocolli](http://broccolijs.com/)
- [Sprockets](https://github.com/rails/sprockets)

CSS bundlers:

- `css-loader`
- `style-loader`

### Transpilers

- [Babel](https://babeljs.io/)
    - This can do a lot and the site covers it well.
    - One use-case is transpiling JSX syntax for React to just JS.
    - Another is transpiling ES6 to older JS.
- [TypeScript](http://www.typescriptlang.org/)
    - [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) in TS docs.

### Dynamic loading of modules

- [Require.js](https://requirejs.org)
- [System.js](https://github.com/systemjs/systemjs)

### Live servers

- [live-server](https://www.npmjs.com/package/live-server)
    - A great zero-config HTTP server with live reload capability. 
    - It has about 150 dependencies though.
    - Install it globally with:
        ```sh
        $ npm install -g live-server
        ```
    - Run it from your project root.
        ```sh
        $ live-server
        ```
- VS Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.


## License

Released under [MIT](/LICENSE).
