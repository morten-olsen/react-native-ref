const { resolve } = require('path');

const project = [
  resolve(__dirname, 'packages/ui/tsconfig.json'),
  resolve(__dirname, 'packages/app/tsconfig.json'),
];

/** @type { import('eslint').ESLint.ConfigData} */
const config = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    ['react/function-component-definition']: ['error', { namedComponents: 'arrow-function' }],
    ['@typescript-eslint/explicit-function-return-type']: 'off',
    ['@typescript-eslint/no-unsafe-member-access']: 'off',
    ['@typescript-eslint/no-unsafe-assignment']: 'off',
    ['@typescript-eslint/no-unsafe-return']: 'off',
    ['@typescript-eslint/no-unsafe-call']: 'off',
    ['@typescript-eslint/no-unsafe-argument']: 'off',
  },
};

module.exports = config;