module.exports = {
  plugins: ['jest'],
  extends: ['eslint:recommended', 'airbnb-base'],
  globals: {
    page: true,
    context: true,
  },
  'env': {
    'jest/globals': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 2017
  },
};
