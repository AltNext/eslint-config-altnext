import { ESLint } from 'eslint';
import type { Linter } from 'eslint';

const PREFIX = '@typescript-eslint/';

export const getTsEslintRules = ({ rules }: { rules?: Record<string, unknown> }): Set<string> =>
  new Set(
    Object.keys(rules ?? {})
      .filter((name) => name.startsWith(PREFIX))
      .map((name) => name.slice(PREFIX.length)),
  );

export const reduceBooleanArray = (arr: boolean[], defaultValue = false): boolean =>
  arr.reduce((acc, value) => (defaultValue ? acc && value : acc || value), defaultValue);

export const getSnapshot = async (config?: string): Promise<string> => {
  const eslint = new ESLint({ overrideConfigFile: config ? `${config}.js` : undefined });
  const configuration = (await eslint.calculateConfigForFile('test.ts')) as Linter.Config;

  return JSON.stringify(configuration, null, 2).replace(
    new RegExp(process.env.INIT_CWD ?? 'thisWillNeverMatchAnythingHopefully', 'g'),
    'CWD',
  );
};
