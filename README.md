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

### Plugins

We use a wide variety of plugins and other packages,
all of whom are bundles as dependencies of this package.

Special thanks to the maintainers and contributors of these packages.

The following are the various packages and plugins included when adding this package:
* [`@typescript-eslint/{eslint-plugin,parser}`](https://github.com/typescript-eslint/typescript-eslint)
* [`eslint`](https://github.com/eslint/eslint)
* [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
* [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias)
* [`eslint-import-resolver-typescript`](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)
* [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
* [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
* [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
* [`eslint-plugin-jest-playwright`](https://github.com/playwright-community/eslint-plugin-jest-playwright)
* [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
* [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
* [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
* [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
* [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
* [`lint-staged`](https://github.com/okonet/lint-staged)
* [`prettier`](https://github.com/prettier/prettier)
