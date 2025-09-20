import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      'unused-imports': unusedImports,
      'react-hooks': reactHooks,
      react: pluginReact,
      'jsx-a11y': jsxA11y,
    },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-empty-pattern': 'off',
      'jsx-a11y/alt-text': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
])
