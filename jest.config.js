module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['templates'],
  collectCoverage: true,
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
};
