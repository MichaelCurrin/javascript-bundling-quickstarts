# Babel

Example of transpiling from ES6 to older ES5 JS for compatibility.


## Packages used

- Babel
    - [@babel/cli](https://www.npmjs.com/package/@babel/cli) on NPM.
        > Babel command line.
    - [@babel/core](https://www.npmjs.com/package/@babel/core) on NPM.
        > Babel compiler core.
    - Note that `babel-cli` is no longer maintained (4 years old).
    - Note that the `babel` package is not needed in package list. And if you installed it, you'd miss the CLI portion.
    - [babeljs.io/](https://babeljs.io/)
        - [Docs](https://babeljs.io/docs/en/) home
        - [Installation](https://babeljs.io/en/setup/#installation) - see CLI section.
    - Allow modern syntax - as it transpiles ES6 syntax to older JS.

Optionally add a Babel config file and setup [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

## Install

```sh
$ npm i
```


## Build

```sh
$ npm run build
```

There is no frontend to view but you can see the [dist](dist/) directory.


## Notes

- By default, Babel will output each file separately to an output directory, created by Babel. Default option: `--out-dir dist/`.
- This can be adjusted to a single bundled, concatenated file. e.g. `--out-file dist/bundle.js`.
- The `--watch` flag can be used to build on changes.
