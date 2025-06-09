# prettier-config-vladpuz

> Моя конфигурация prettier

Особенности:

- Сортировка package.json
  ([prettier-plugin-pkg](https://www.npmjs.com/package/prettier-plugin-pkg))
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

export default {
  ...vladpuz(),
}
```

Если вы используете eslint со стилистическими правилами, отключите prettier для
файлов javascript и typescript. Для этого создайте файл `.prettierignore`:

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

Запуск prettier в режиме проверки:

```shell
prettier --check .
```

Запуск prettier в режиме записи:

```shell
prettier --write .
```

## Смотрите так же

- [eslint-config-vladpuz](https://github.com/vladpuz/eslint-config-vladpuz)
