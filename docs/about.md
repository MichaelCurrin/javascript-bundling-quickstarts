




## Why use these tools?

### Why bundle scripts?

We use a bundler to take modules with dependencies and generate static assets representing those modules.

Features:

- Allows imports with `require('modules')` - whether your own module like `lib.js` or an external NPM package like `lodash`.
- No globals required.
- Source order independence.
- No need for namespacing your own application code.

See [browserify](/quickstarts/browserify/) and [webpack](/quickstarts/webpack/) directories in this project. These compile using CommonJS modules. The output will be the same but with different styles for logging and output.

### Why transpile scripts?

Some server-side scripts are needed to prepare the scripts, such as Babel to transpile React code or just modern JS to older JS for compatibility. TypeScript also needs transpiling.

See the [babel](/quickstarts/babel/) and [typescript](/quickstarts/typescript) directories.
