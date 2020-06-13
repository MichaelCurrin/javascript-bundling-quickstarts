# Bundle Javascript Quickstarts
> Examples of how to bundle a JS app - using webpack and other tools


Based on this article:

- [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) - Sitepoint post in 2016.


## Why transpile?

We use a bundler to take modules with dependencies and generate static assets representing those modules.

Features:

- Allows imports with `require('modules')` - whether your own module like `lib.js` or an external NPM package like `lodash`.
- No globals required.
- Source order independence.
- No need for namespacing your own application code.


## Why transpile?

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code or just modern JS to older JS for compatability. TypeScript also needs transpiling.




## Resources

### Bundlers

JS bundlers:

- [Webpack](http://webpack.github.io/)
    - [Getting started with Webpack](webpack.github.io/docs/tutorials/getting-started/)
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
- [TypeScript](http://www.typescriptlang.org/)
    - [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) in TS docs.

### Dynamic loading of modules

- [Require.js](https://requirejs.org)
- [System.js](https://github.com/systemjs/systemjs)

## Live servers

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
