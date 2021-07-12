# eslint-config-altnext

[![Test Status](https://github.com/altnext/eslint-config-altnext/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/AltNext/eslint-config-altnext/actions/workflows/test.yml?query=branch%3Amain)
[![Coverage Status](https://coveralls.io/repos/github/AltNext/eslint-config-altnext/badge.svg?branch=main)](https://coveralls.io/github/AltNext/eslint-config-altnext?branch=main)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=bugs)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=code_smells)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=security_rating)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=sqale_index)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=AltNext_eslint-config-altnext&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=AltNext_eslint-config-altnext)

[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/altnext/eslint-config-altnext)](https://app.snyk.io/org/altnext/project/46fd7677-38c9-4e4a-a374-664f722e4427)

[![npm](https://img.shields.io/npm/v/eslint-config-altnext)](https://www.npmjs.com/package/eslint-config-altnext)
[![NPM](https://img.shields.io/npm/l/eslint-config-altnext)](https://www.npmjs.com/package/eslint-config-altnext)
[![npm](https://img.shields.io/npm/dm/eslint-config-altnext)](https://www.npmjs.com/package/eslint-config-altnext)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/eslint-config-altnext)](https://www.npmjs.com/package/eslint-config-altnext)

[![GitHub issues](https://img.shields.io/github/issues-raw/altnext/eslint-config-altnext)](https://www.github.com/altnext/eslint-config-altnext)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/altnext/eslint-config-altnext)](https://www.github.com/altnext/eslint-config-altnext)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/altnext/eslint-config-altnext)](https://www.github.com/altnext/eslint-config-altnext)
[![Lines of code](https://img.shields.io/tokei/lines/github/altnext/eslint-config-altnext)](https://www.github.com/altnext/eslint-config-altnext)
[![GitHub top language](https://img.shields.io/github/languages/top/altnext/eslint-config-altnext)](https://www.github.com/altnext/eslint-config-altnext)

A highly opinionated configuration for ESLint and Prettier,
following Altnext's styleguide.

### Installation

Run `npm i -D eslint-config-altnext` (or `yarn add -D eslint-config-altnext`) to add this package to your project's `devDependencies`.

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

### Prettier

We also bundle Altnext's [`prettier`](https://github.com/prettier/prettier) configuration in this package.
To use it, simply set your project's `.pretterrc.js` file to the following:

```javascript
module.exports = require('eslint-config-altnext/.prettierrc');
```

### Plugins

We use a wide variety of plugins and other packages,
all of whom are bundled as dependencies of this package.

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
* [`prettier`](https://github.com/prettier/prettier)
