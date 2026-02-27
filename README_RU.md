# prettier-config-vladpuz

> My Prettier config

Особенности:

- Минималистичный для чтения, стабильный для diff и консистентный стиль
- Сортировка package.json
  ([prettier-plugin-packagejson](https://www.npmjs.com/package/prettier-plugin-packagejson))
- Форматирование shell
  ([prettier-plugin-sh](https://www.npmjs.com/package/prettier-plugin-sh))

## Установка

```shell
npm install --save-dev prettier prettier-config-vladpuz
```

## Использование

Создайте файл `prettier.config.js`:

```javascript
import vladpuz from 'prettier-config-vladpuz'

export default vladpuz()
```

Если вы используете ESLint со стилистическими правилами, отключите Prettier для
файлов JavaScript и TypeScript. Для этого создайте файл `.prettierignore`:

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

Запуск Prettier в режиме проверки:

```shell
prettier --check .
```

Запуск Prettier в режиме записи:

```shell
prettier --write .
```

## Смотрите так же

- [eslint-config-vladpuz](https://github.com/vladpuz/eslint-config-vladpuz)
- [eslint-config-vladpuz-react](https://github.com/vladpuz/eslint-config-vladpuz-react)
