/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '^react-dom$', '<THIRD_PARTY_MODULES>', '^@/.*', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
