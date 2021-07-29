# Webpack

Webpack is one of the most widely used choices for bundling multiple JS files as one.


## Minification and compression

From Webpack v4 on, the default behavior in production mode is to _minify_ your JS files using TerserPlugin, such as to create `bundle.min.js`.

See more info:

- [Production guide](https://webpack.js.org/guides/production/) - covers how to create and merge multiple configs.
- [Production mode](https://webpack.js.org/configuration/mode/#mode-production)

If you want to compress SVGs, images and other files as zip files, see the
[Webpack compression](https://webpack.js.org/plugins/compression-webpack-plugin/) instructions.


## Extending

If you want to use Babel in Webpack, consider [babel-loader](https://webpack.js.org/loaders/babel-loader/) guide under Webpack loaders. See also the [Webpack Babel TypeScript](/quickstarts/webpack-babel-typescript/) quickstart.

If you want to handle CSS, see [style-loaders](https://webpack.js.org/loaders/style-loader/) guide.


## Packages used

- Webpack
    - [Homepage](http://webpack.github.io/)
    - [npm](https://www.npmjs.com/package/webpack) package
- Webpack CI package - Note that Webpack fails without this.
    - [docs](https://webpack.js.org/api/cli/)
    - [npm](https://www.npmjs.com/package/webpack-cli) package
        - Usage without config:
            ```sh
            $ webpack <entry> [<entry>] -o <output>
            $ # e.g.
            $ webpack src/index.js -o dist/bundle.js
            ```
- [lodash](https://www.npmjs.com/package/lodash) package - to show use of an external dependency in bundling.


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
