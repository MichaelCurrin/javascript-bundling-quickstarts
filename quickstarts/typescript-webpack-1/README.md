# TypeScript Webpack

Based on the [TypeScript](https://webpack.js.org/guides/typescript/) guide in the Webpack docs.


1. Install TypeScript and TS Loader.
    ```sh
    $ npm install -D typescript ts-loader
    ```
    > We use `ts-loader` in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.
2. Setup [tsconfig.json](tsconfig.json).
    - Not covered in the tutorial, make sure to set `include: ["src"]` to avoid copying the entire `src` directory itself to `dist` (even if `tsc -p .` is set). And make sure to not use `tsc -p src` as you'll get an error as TS config not found.
3. Setup [webpack.config.js](webpack.config.js).
    > This will direct webpack to enter through `./index.ts`, load all .ts and `.tsx` files through the `ts-loader`, and output a bundle.js file in our current directory.
4. Enable source maps.
    - Add `"sourceMap": true,` to TS config.
    - Add `devtool: 'inline-source-map',` to Webpack config.
5. Add 3rd party types. e.g.
    ```sh
    $ npm install lodash
    $ npm install -D @types/lodash
    ```
