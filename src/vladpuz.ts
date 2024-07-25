import type { Config } from 'prettier'

/* eslint perfectionist/sort-objects: "error" */

export function vladpuz(): Config {
  const options: Config = {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: 'always',
    quoteProps: 'consistent',
    semi: false,
    singleAttributePerLine: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: false,
  }

  return {
    plugins: ['prettier-plugin-packagejson', 'prettier-plugin-sh'],
    ...options,
  }
}
