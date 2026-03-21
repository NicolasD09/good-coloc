//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'crlf',
  experimentalOperatorPosition: 'start',
  experimentalTernaries: true,
  jsxSingleQuote: true,
  objectWrap: 'collapse',
  plugins: ['prettier-plugin-tailwindcss'],
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 4,
  useTabs: true,
}

export default config;
