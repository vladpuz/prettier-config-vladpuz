# prettier-config-vladpuz

> My Prettier config

Features:

- Consistent, minimalistic for readability and stable for diff style
- Shell formatting
  ([prettier-plugin-sh](https://www.npmjs.com/package/prettier-plugin-sh))

## Installation

```shell
npm install --save-dev prettier prettier-config-vladpuz
```

## Usage

Create a file `prettier.config.js`:

```javascript
import vladpuz from 'prettier-config-vladpuz'

export default vladpuz()
```

If you use ESLint with stylistic rules, disable Prettier for JavaScript and
TypeScript files. For this, create a file `.prettierignore`:

```ignore
# javascript
*.js
*.jsx
*.mjs
*.cjs

# typescript
*.ts
*.tsx
*.mts
*.cts
```

Run Prettier in check mode:

```shell
prettier --check .
```

Run Prettier in write mode:

```shell
prettier --write .
```

## See also

- [eslint-config-vladpuz](https://github.com/vladpuz/eslint-config-vladpuz)
