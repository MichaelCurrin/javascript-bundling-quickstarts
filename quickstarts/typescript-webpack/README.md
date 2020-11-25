# Typescript Webpack
> Example of how to add TS to an existing Webpack JS project


## Convert a JS project to TS

Based on [Converting Existing JavaScript to TypeScript](https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript) on Tutorials Teacher.

### Warning

I'm not confident in the quality of that tutorial.

It leaves out some steps like installing TypeScript, running TypeScript (or Webpack CLI?) and enabling source maps. The current latest awesome loader doesn't work with the latest TS 4.

So see also [TypeScript](https://webpack.js.org/guides/typescript/) guide on the Webpack docs for a more robust example.

### Steps

Note that you can use TypeScript without Webpack - see [typescript](/quickstarts/typescript/) quickstart.

1. Create [tsconfig.json](tsconfig.json).
2. Install TypeScript and Webpack.
    ```sh
    $ npm install -D typescript@3 webpack
    ```
3. Install packages to integrate with Webpack as a build tool. These depend on TypeScript and Webpack being installed. You can also use `ts-loader` instead, which uses `tsc`.
    ```sh
    $ npm install -D awesome-typescript-loader source-map-loader
    ```
4. Create [webpack.config.js](webpack.config.js).
    - The `.ts` and `.tsx` files will be handled by `awesome-typescript-loader`.
    - The `.js` files will have any source-maps re-processed by `source-map-loader`.
5. Rename `.js` files to `.ts` and `.jsx` to `.tsx`.
6. Add a `build` or `compile` step to your [package.json](package.json).
    - I can't see the point of setting `include` as `src/**/*` in your TS config. As you still need `tsc -p .` in your build step. Using `tsc` ends up being too broad for what it copies to `dist`.
    - Also note that `tsc -p src` is bad idea as it will give an error that your TS config is missing.
7. Install [types](https://www.npmjs.com/~types) for 3rd-party libraries. e.g.
    ```sh
    $ npm install @types/jquery
    ```
8. Compile JS to TS and check for errors.
    ```sh
    $ npm run build
    ```

### Sample error

The `double` function expects a number. So if we call it with a string like `double('abc')` then we get an error.

```
Argument of type 'string' is not assignable to parameter of type 'number'.

double('abc')
```


## How to use this quickstart

```sh
$ cd quickstarts/typescript-webpack
```

### Install

```sh
$ npm i
```


### Build

```sh
$ npm run build
$ ls dist
```
