# TypeScript with React & Webpack quickstart

Based on [React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) example in the TypeScript docs.

See [React tutorial](https://reactjs.org/tutorial/tutorial.html) if you are new to React.


## Packages used

- `webpack` and `webpack-cli`
- `react` and `react-dom`, plus their type definitions
- `ts-loader`
    - Helps Webpack compile your TypeScript code using the `tsconfig.json` config
    - There are other TS loaders out there too.
- `source-map-loader`
    - Uses any sourcemap outputs from TypeScript to inform webpack when generating _its own_ sourcemaps. This will allow you to debug your final output file as if you were debugging your original TypeScript source code.


## Configuration

See [tsconfig.json](tsconfig.json) - this determines input files and rules.

Read more in the [docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).


## Install

```sh
$ npm i
```


## Run

Run Webpack to compile the `main.js` script and `main.js.map` file.

```sh
$ npm run build
```


## Notes

Quotes are comments from the SitePoint tutorial.

- About the [index.html](index.html) imports that are from `node_modules`:
    > Notice that we’re including files from within node_modules. React and React-DOM’s npm packages include standalone .js files that you can include in a web page, and we’re referencing them directly to get things moving faster. Feel free to copy these files to another directory, or alternatively, host them on a content delivery network (CDN). Facebook makes CDN-hosted versions of React available, and you can read more about that [here](https://facebook.github.io/react/downloads.html#development-vs.-production-builds).
- About [webpack.config.js](webpack.config.js):
    > You might be wondering about that externals field. We want to avoid bundling all of React into the same file, since this increases compilation time and browsers will typically be able to cache a library if it doesn’t change.
- Unlike the other quickstarts in the this project, the `dist` directory will be created by the build process _automatically_ - so we do not need to create it or add it to version control with `.gitkeep`.
