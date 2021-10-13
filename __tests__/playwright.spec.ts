import { playwright } from '../src';
import { getSnapshot } from './common';

describe('playwright', () => {
  it('should match snapshot', () => {
    expect(playwright).toMatchSnapshot();
  });

  it('should match config when running', async () => {
    await expect(getSnapshot('playwright')).resolves.toMatchSnapshot();
  });
});
