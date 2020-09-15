module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__tests__/mocks/style.js',
    '#(.*)': '<rootDir>/__tests__/$1'
  },
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)']
};
