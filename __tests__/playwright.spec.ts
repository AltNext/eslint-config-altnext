import execa from 'execa';

import { playwright } from '../src';

describe('playwright', () => {
  it('should match snapshot', () => {
    expect(playwright).toMatchSnapshot();
  });

  it('should match config when running', async () => {
    const { stdout } = await execa('yarn', ['eslint', '-c', 'playwright.js', '--print-config', './test.ts']);

    expect(stdout).toMatchSnapshot();
  }, 10_000);
});
