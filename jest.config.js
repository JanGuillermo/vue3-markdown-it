module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/tests/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};
