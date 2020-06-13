# Bundle Javascript Quickstarts
> Examples of how to bundle a JS app - using webpack and other tools


Based on article:

- https://www.sitepoint.com/javascript-modules-bundling-transpiling/


## Why bundle?

If you use the tools covered in this doc or the examples, then you can generate a single JS file to be loaded on the frontend. Using the supported browser syntax, appropriate imports, namespacing an also it means fewer requests. And you can write imports and tests for your server-side scripts and have the scripts available on the frontend.

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code. TypeScript also needs transpiling.


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

- [Babel](https://babeljs.io/) - for ES6
- [TypeScript](http://www.typescriptlang.org/)


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