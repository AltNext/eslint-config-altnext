import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'eslint-config-altnext tests',
        outputDirectory: './reports',
        outputName: 'eslint-config-altnext.xml',
      },
    ],
  ],
  testPathIgnorePatterns: ['node_modules', 'dist', '__tests__/common.ts'],
};

export default config;
