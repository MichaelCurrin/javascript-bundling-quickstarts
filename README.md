# Javascript Bundling Quickstarts
> How to bundle your JS as a single script - using Webpack, Browserify, Babel or TypeScript


## Featured tools

There are standalone examples in this project in the [quickstarts](/quickstarts/) directory. Each can be run locally to demonstrate how to use one or more of these JS tools. Some include an `index.html` to test the JS in the browser.

- Webpack
- Browserify
- Babel - transpile from ES6 to older JS
- TypeScript - transpile to JS


## About

Most of this project is based on this article - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) (Sitepoint post, 2016)

Explore the examples in the [quickstarts](/quickstarts/) directory.

To run an app locally, follow these steps:

1. Install Node.js
    - Follow [instructions](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba)
1. Clone the repo.
1. Navigate to a target app. e.g.
    ```sh
    $ cd quickstarts/babel
    ```
1. Follow the `README.md` instructions at that level to install and then build the app. Test in the browser if indicated to.


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

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code or just modern JS to older JS for compatibility. TypeScript also needs transpiling.

See the [babel](/quickstarts/babel/) and [typescript](/quickstarts/typescript) directories.


## Resources

### JS bundlers

- [Webpack](http://webpack.github.io/)
    - [Getting started with Webpack](webpack.github.io/docs/tutorials/getting-started/)
    - [Concepts](https://webpack.js.org/concepts)
- [Browserify](http://browserify.org/)
- [JSPN](http://jspm.io/)
- [Rollup](http://rollupjs.org/)
- [Brunch](http://brunch.io/) / [Broccoli](http://broccolijs.com/)
- [Sprockets](https://github.com/rails/sprockets)

### CSS bundlers

- `css-loader`
- `style-loader`

### JS transpilers

- [Babel](https://babeljs.io/)
    - This can do a lot and the site covers it well.
    - One use-case is transpiling JSX syntax for React to just JS.
    - Another is transpiling ES6 to older JS.
- [TypeScript](http://www.typescriptlang.org/)
    - [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) in TS docs.

### Dynamic loading of JS modules

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


## Development

### Lint

Install `eslint` globally.

Check for errors.

```sh
$ eslint .
```

Apply fixes.

```sh
$ eslint . --fix
```

Commit and push.


## License

Released under [MIT](/LICENSE).
