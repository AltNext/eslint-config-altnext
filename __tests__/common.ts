import execa from 'execa';

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
  const { stdout } = await execa('yarn', [
    '--emoji',
    'false',
    'eslint',
    ...(config ? ['-c', `${config}.js`] : []),
    '--print-config',
    './test.ts',
    '--no-color',
  ]);

  return stdout.replace(new RegExp(process.env.INIT_CWD ?? 'thisWillNeverMatchAnythingHopefully', 'g'), 'CWD');
};
