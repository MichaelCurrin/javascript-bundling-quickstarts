# TypeScript

Example of transpiling from TypeScript to plain JS.

Note this is a very simple app.

- No package is used to do any bundling. If there are multiple `.ts` files, then multiple `.js` files get created in the output directory.
- Arguments are passed to the `tsc` command in [package.json](package.json) - normally you have a config files around ESLint and TypeScript (see `tsconfig.json` in other quickstarts).
- In a real project you would have more code and also hopefully tests.


## Packages used

Note that **no bundlers** like Webpack or Babel needed to convert to JS. Just TypeScript.

- `typescript`
    - JavaScript with type safety checks. Requires steps to validate types and to transpile to plain JS.
    - [typescriptlang.org](https://www.typescriptlang.org/)
    - [Modules](https://www.typescriptlang.org/Handbook#modules) in the docs.
    - [Type Declaration](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html) in the docs.
    - [Types](https://github.com/DefinitelyTyped/DefinitelyTyped/) on GitHub.
        - Install a types package for a 3rd-party. These are available under a single `@types` org reference in NPM.
        - This is the preferred method:
            ```sh
            $ npm install -D @types/PACKAGE

            $ # e.g.
            $ npm install -D @types/lodash
            ```
        -  You may also need to add a types reference at the top of a script, if you're not using modules:
            ```typescript
            /// <reference types="node" />
            ```
- Node
    - [@types/node](https://www.npmjs.com/package/@types/node)
    - Included here to avoid error when using `require`. Using `import _ from 'lodash'` gave issues because of the underscore but it is fine when using `require`.
- Lodash
    - [lodash](https://www.npmjs.com/package/lodash) on NPM
    - [@types/lodash](https://www.npmjs.com/package/@types/lodash) on NPM


## Install

```sh
$ npm i
```


## Build

```sh
$ npm run build
```

There is no frontend to view but you can see the [dist](dist/) directory for output files. The JS script can be run using `node` and the path to the script.


## Structure

This example is simple. Just a single TS file. And no TS config.

If you compile multiple files like an `index.ts` and `ts-lib.ts` with `tsc src/*`, the output `index.js` file will try to input from `ts-lib.ts` as a TS file.

You can use `tsc -p .` to solve this, but then need `tsconfig.json` file to avoid an error.
