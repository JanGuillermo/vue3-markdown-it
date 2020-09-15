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
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/__tests__/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
