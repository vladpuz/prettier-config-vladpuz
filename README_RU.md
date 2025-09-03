# prettier-config-vladpuz

> Мой Prettier конфиг

Особенности:

- Консистентный, минималистичный для чтения и стабильный для diff стиль
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
