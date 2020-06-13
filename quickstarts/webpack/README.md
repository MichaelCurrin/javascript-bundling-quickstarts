# Webpack

## Packages used

- [webpack](http://webpack.github.io/) package
- `webpack-cli` package - Webpack fails without this.
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
