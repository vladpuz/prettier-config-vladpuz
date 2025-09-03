import type { Config } from 'prettier'

function vladpuz(): Config {
  return {
    plugins: [
      'prettier-plugin-sh',
    ],
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'ignore',
    jsxSingleQuote: false,
    objectWrap: 'preserve',
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
}

export default vladpuz
