# TypeScript Webpack

Based on the [TypeScript](https://webpack.js.org/guides/typescript/) guide in the Webpack docs.


## Install

```sh
$ npm install
```

## Build

```sh
$ npm run build
```


## Packages used

- `webpack`
- `webpack-cli`
- `typescript`
- `ts-loader`
    - From the docs:
        > We use `ts-loader` in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.
- `lodash`


## Setup steps

1. Install Webpack.
    ```sh
    $ npm install -D webpack webpack-cli
    ```
2. Install TypeScript and TS Loader.
    ```sh
    $ npm install -D typescript ts-loader
    ```
3. Setup [tsconfig.json](tsconfig.json).
4. Setup [webpack.config.js](webpack.config.js).
    > This will direct webpack to enter through `./index.ts`, load all .ts and `.tsx` files through the `ts-loader`, and output a bundle.js file in our current directory.
5. Enable source maps.
    - Add `"sourceMap": true,` to TS config.
    - Add `devtool: 'inline-source-map',` to Webpack config.
6. Add a bundle step to your [package.json](package.json).
    - Such as: `"bundle": "webpack",`. You don't need to run `tsc`.
    - That will compile from TS and JS and bundle your code and dependencies as a `bundle.js` file. Or `main.js` if you prefer.
7. Add 3rd party types. e.g.
    ```sh
    $ npm install lodash
    $ npm install -D @types/lodash
    ```

## Non-code assets

Add custom types for non-code assets.

Such as `.svg` files.

- `custom.d.ts`
    ```typescript
    declare module "*.svg" {
    const content: any;
    export default content;
    }
    ```

> Here we declare a new module for SVGs by specifying any import that ends in `.svg` and defining the module's content as any. We could be more explicit about it being a url by defining the type as string. The same concept applies to other assets including CSS, SCSS, JSON and more.

Or `.vue` files.

- `shims-vue.d.ts`
    ```typescript
    declare module '*.vue' {
      import type { DefineComponent } from 'vue'
      const component: DefineComponent<{}, {}, any>
      export default component
    }
    ```
    Or older style:
    ```typescript
    declare module "*.vue" {
        import Vue from "vue";
        export default Vue;
    }
    ```

## Build performance

See the [Build performance](https://webpack.js.org/guides/build-performance/) guide in the Webpack docs.
