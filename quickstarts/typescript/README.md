# TypeScript

Example of transpiling from TypeScript to plain JS.

Note this is a very simple project. Typically you would have more code, tests and config files around linting and TypeScript.


## Packages used

Note that Webpack or other Bundlers are not used here.

- Typescript
    - [typescriptlang.org](https://www.typescriptlang.org/)
    - JavaScript with type safety checks. Requires steps to validate types and to transpile to plain JS.
    - [Modules](https://www.typescriptlang.org/Handbook#modules)
    - [Types](https://github.com/DefinitelyTyped/DefinitelyTyped/) on GitHub.
        - This is the preferred method. For example:
            ```sh
            $ npm install --save-dev @types/PACKAGE
            ```
        - The types should then be automatically included by the compiler. You may need to add a types reference if you're not using modules:
            ```typescript
            /// <reference types="node" />
            ```
        - [Handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)
- [lodash](https://www.npmjs.com/package/lodash)
- [@types/lodash](https://www.npmjs.com/package/@types/lodash)
- [@types/node](https://www.npmjs.com/package/@types/node)
    - Included here to avoid error when using `require`. Using `import _ from 'lodash'` gave issues because of the underscore but it is fine when using `require`.


## Install

```sh
$ npm i
```


## Build

```sh
$ npm run build
```

There is no frontend to view but you can see the [dist](dist/) directory for output files. The JS script can be run using `node` and the path to the script.
