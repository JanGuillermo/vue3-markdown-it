module.exports = {
  root: true,
  env: {
    jest: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  },
};
