import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import compat from 'eslint-plugin-compat';
import cypressPlugin from 'eslint-plugin-cypress';
import vitestPlugin from 'eslint-plugin-vitest';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    ignores: ['**/node_modules/**', 'dist/**', '**/eslint.config.js', '**/vite.config.ts'],
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: '.',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        Set: true,
        Map: true,
        document: 'readonly',
        window: 'readonly',
        alert: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      prettier: prettierPlugin,
      compat,
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
      browsers: '> 0.5%, last 2 versions, not op_mini all, Firefox ESR, not dead',
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // JavaScript/TS
      'no-var': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-unused-vars': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      curly: 'error',

      // 스타일 관련
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      // 'react-hooks/exhaustive-deps': 'warn',

      // Compat
      // 'compat/compat': 'warn',

      // Import order
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': ['error', { ignore: ['@tanstack/react-query'] }],
      'import/extensions': 'off',
    },
  },

  {
    files: [
      '**/src/**/*.{spec,test}.[jt]s?(x)',
      '**/__mocks__/**/*.[jt]s?(x)',
      './src/setupTests.ts',
    ],
    plugins: {
      vitest: vitestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        globalThis: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
        vi: true,
      },
    },
    rules: {
      'vitest/expect-expect': 'off',
    },
  },

  {
    files: ['cypress/e2e/**/*.cy.js'],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        cy: true,
      },
    },
  },
  prettierConfig,
];
