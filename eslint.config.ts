// eslint.config.ts
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['dist/**', 'dist-ssr/**', 'coverage/**'],
  },
]
