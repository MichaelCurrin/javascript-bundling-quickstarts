# Bundling example

## Why bundle?

We use a bundler to take modules with dependencies and generate static assets representing those modules.

Features:

- Allows imports with `require('modules')` - whether your own module like `lib.js` or an external NPM package like `lodash`.
- No globals required.
- Source order independence.
- No need for namespacing your own application code.


## Packages used

Two packages are used in this example - they give the same result but with different style of output. 

- [browserify](http://browserify.org/) package
- [webpack](http://webpack.github.io/) package
- [webpack-cli] package - Webpack fails without this.
    - [docs](https://webpack.js.org/api/cli/)
    - [npm](https://www.npmjs.com/package/webpack-cli)
        - Usage without config:
            ```sh
            $ webpack <entry> [<entry>] -o <output>
            $ # e.g.
            $ webpack src/index.js -o dist/bundle.js
            ```
- [lodash](https://www.npmjs.com/package/lodash)

## Install


```sh
$ cd bundling
$ npm i
```

## Build

Run one of these:

```sh
$ npm run build:browserify
```

```sh
$ npm run build:webpack
```


This will have to be re-run every time JS files change.

## View

Start a dev server in the [public](public/) directory.

Open in the browser.

Check the dev console output.