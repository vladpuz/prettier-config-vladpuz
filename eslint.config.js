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
]
