# Featured tools

This project provides a couple of standalone starter samples in the [quickstarts](/quickstarts/) directory. Each can be run locally to demonstrate how to use one or more of these JS tools.

- Babel - to transpile from modern JS to older JS for compatibility and also handles JSX to JS.
- Browserify - to bundle to a single JS file with cross-browser compatibility.
- Webpack - to bundle to a single JS file. Also handles other assets besides JS. Uses Babel internally.
- TypeScript - to transpile from TS to JS and to check types.
- ES Build - to bundle to a single JS file, minify, and transpile from JSX, TS and TSX to plain JS.

Some sections include an `index.html` to test the JS in the browser.

Most of this project is based on this article - [Understanding JavaScript Modules: Bundling & Transpiling](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) (SitePoint post, 2016). There are other tools covered there which are similar to the ones above. The article says that this area is _complicated_.

If you are looking for a way to do all the bundling and transpiling tasks above and more without installing separate node packages, then consider switching from Node.js to [Deno](https://github.com/MichaelCurrin/dev-cheatsheets/tree/master/cheatsheets/javascript/deno/). It does all that and more.

## Choosing a tool

The most popular tools in the community seem to be Webpack, Babel and TypeScript, so you'll probably be fine setting those up in your project.

There are an overwhelming number of alternatives and additional loaders like for CSS. These are covered in [Resources](/docs/resources.md) section.

## Bundling without Node or 3rd-party packages

If you are struggling to decide between, configure and learn a bundling and transpilation tool, you may be interested in an alternative to Node called Deno.

It can handle running TypeScript and [JSX](https://github.com/denoland/deno/pull/3038) and it can bundle to a single JS file. All without any external dependencies to install or configure.

```sh
$ deno run index.ts
$ demo bundle index.ts build/bundle.js
```

See my [Deno Project Template](https://github.com/MichaelCurrin/deno-project-template) for more info.
