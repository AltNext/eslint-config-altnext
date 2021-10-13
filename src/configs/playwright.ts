import type { Linter } from 'eslint';

const playwright: Linter.Config = {
  extends: ['plugin:playwright/jest-playwright'],
};

export = playwright;
