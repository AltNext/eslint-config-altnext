# eslint-config-altnext
A highly opinionated configuration for ESLint and Prettier,
following Altnext's styleguide.

### Installation

Run `npm i -D eslint-config-altnext` (or `yarn add -D eslint-config-altnext`) to add this package to your dependencies.

We bundle everything necessary to run [`eslint`](https://github.com/eslint/eslint),
including `eslint` itself.

### Usage

In your `.eslintrc.js` (or any other file you use to configure eslint),
add the config you want from this package to the `extends` field.

For example:
```javascript
module.exports = {
  extends: ['altnext'],
};
```

We provide 2 configs, `altnext` (or `altnext/base`, which point to the same config),
and `altnext/type-checking`, which includes the base config and adds rules that require type information to run.

If you use `altnext/type-checking`,
you'll need to add a reference to your project's `tsconfig.json`,
for example:
```javascript
module.exports = {
  extends: ['altnext/type-checking'],
  parserOptions: { tsconfigRootDir: __dirname, project: ['./tsconfig.json'] },
};
```