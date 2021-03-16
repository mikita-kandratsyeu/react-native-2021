module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  rules: {
    'no-debugger': 'off',
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    'no-console': 0,
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
