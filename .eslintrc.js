module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
