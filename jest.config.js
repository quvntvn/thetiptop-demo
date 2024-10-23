const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Utilisation de babel-jest pour les fichiers JavaScript et TypeScript
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
