module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.vue'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/tests/mocks/styleMock.js'
  },
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/tests/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};
