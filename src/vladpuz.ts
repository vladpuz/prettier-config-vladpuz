import { type Config } from 'prettier'

/* eslint perfectionist/sort-objects: "error" */

function vladpuz(): Config {
  const options: Config = {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'ignore',
    insertPragma: false,
    jsxSingleQuote: false,
    printWidth: 120,
    proseWrap: 'always',
    quoteProps: 'consistent',
    requirePragma: false,
    semi: false,
    singleAttributePerLine: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: false,
  }

  return {
    plugins: ['prettier-plugin-packagejson'],
    ...options,
  }
}

export default vladpuz
