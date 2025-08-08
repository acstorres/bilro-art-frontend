import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      'unused-imports': unusedImports,
      react: pluginReact,
    },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
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
