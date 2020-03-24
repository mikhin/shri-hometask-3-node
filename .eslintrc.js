module.exports = {
  extends: [
    "airbnb-base",
    "react-app"
  ],
  rules: {
    "no-console": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-pascal-case": 0,
    "camelcase": "off"
  },
  globals: {
    React: true,
    PropTypes: true,
    T: true,
    ENV: true,
    b: true,
  },
  env: {
    "browser": true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: 'client/config/webpack.config.js',
      },
    },
  },
};
