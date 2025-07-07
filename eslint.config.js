import vladpuz from 'eslint-config-vladpuz'

const config = vladpuz()

config.push({
  ignores: ['build'],
})

config.push({
  files: ['src/vladpuz.ts'],
  rules: {
    'perfectionist/sort-objects': ['error', {
      groups: ['multiline-member', 'unknown'],
    }],
  },
})

export default config
