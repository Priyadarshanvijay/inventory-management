module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-console': 0,
    'import/extensions': [
      'error',
      'ignorePackages'
    ]
  }
};
