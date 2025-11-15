import vladpuz from 'eslint-config-vladpuz'

export default [
  ...vladpuz(),
  {
    name: 'sort',
    files: ['src/vladpuz.ts'],
    rules: {
      'perfectionist/sort-objects': ['error', {
        groups: ['multiline-member', 'unknown'],
      }],
    },
  },
  {
    name: 'extensions',
    ignores: ['prettier.config.js'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: ['**/*.js'],
      }],
    },
  },
]
