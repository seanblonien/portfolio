import { defineConfig, globalIgnores } from 'eslint/config';
import { configWithNext } from '@seanblonien/eslint-config-react';

const eslintConfig = defineConfig([
  ...await configWithNext(),
  {
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-max-depth': 'off',
      'no-console': 'off',
    },
  },
  // Override default ignores
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Additional ignores:
    'node_modules/**',
    '*.tsbuildinfo',
    '.vercel/**',
  ]),
]);

export default eslintConfig;
