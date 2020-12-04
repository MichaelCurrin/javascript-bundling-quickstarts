# TypeScript

Example of transpiling from TypeScript to plain JS.

Note this is a very simple project. Arguments are passed to the `tsc` command in [package.json](package.json) - normally you have a config files around linting and TypeScript. In a real proejct you would have more code and also hopefully tests. 


## Packages used

Note that **no bundlers** like Webpack or Babel needed to convert to JS. Just TypeScript.

- `typescript`
    - [typescriptlang.org](https://www.typescriptlang.org/)
    - JavaScript with type safety checks. Requires steps to validate types and to transpile to plain JS.
    - [Modules](https://www.typescriptlang.org/Handbook#modules)
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
        - [Handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)
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
