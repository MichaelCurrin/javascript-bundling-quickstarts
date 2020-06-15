# Babel

Example of transpiling from ES6 to older ES5 JS for compatibility.


## Packages used

- Babel
    - [npm package](https://www.npmjs.com/package/Babel)
        - More specifically, we use `@babel/cli` and `@babel/core` but `babel-cli` would work too. Note that `babel` is not needed for package list.
    - [babeljs.io/](https://babeljs.io/)
        - [Docs](https://babeljs.io/docs/en/) home
        - [Installation](https://babeljs.io/en/setup/#installation) - see CLI section.
        - [@babel-cli](https://babeljs.io/docs/en/babel-cli) page
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

- The `dist` directory will be created by Babel.
- By default Babel will output each file separately - `-out-dir dist/`.
- This can be adjusted to a single concatenated file - `--out-file dist/bundle.js`.
- The `--watch` flag can be used to build on changes.
