import { defineConfig, globalIgnores } from 'eslint/config';
import nextPlugin from '@next/eslint-plugin-next';
import reactConfig from '@seanblonien/eslint-config-react';

const eslintConfig = defineConfig([
  ...reactConfig,
  // Next.js recommended rules
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
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
