import type { Config } from 'prettier'

/* eslint perfectionist/sort-objects: error */

function vladpuz(): Config {
  const config: Config = {
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
    plugins: ['prettier-plugin-pkg', 'prettier-plugin-sh'],
    ...config,
  }
}

export default vladpuz
