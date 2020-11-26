# Webpack + Babel + TypeScript quickstart

Extends the [Webpack example](../webpack/) by adding support for TypeScript and Babel.


## Packages used

- [webpack](http://webpack.github.io/) package
- `webpack-cli` package - The `webpack` command will fail without this.
    - [docs](https://webpack.js.org/api/cli/)
    - [npm](https://www.npmjs.com/package/webpack-cli)
        - Usage without config:
            ```sh
            $ webpack <entry> [<entry>] -o <output>
            $ # e.g.
            $ webpack src/index.js -o dist/bundle.js
            ```
- Babel
    - `babel-loader` - There are other loaders available like `ts-loader` to convert TS to JS. This is a Babel one.
    - `@babel/core`
    - `@babel/preset-env`
- [lodash](https://www.npmjs.com/package/lodash)


## Install

```sh
$ npm i
```


## Build

```sh
$ npm run build
```

This will have to be re-run every time JS files change.


## View

Start a dev server in the [dist](dist/) directory.

Open in the browser.

Check the dev console output.

Or test with:

```sh
$ node dist/bundle.js
```
