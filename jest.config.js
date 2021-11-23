// @ts-check

/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
const config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js}'],
  roots: ['<rootDir>/src/', '<rootDir>/test/', '<rootDir>/scripts/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    '\\.(css|sass|scss)$': '<rootDir>/test/mocks/styleMock.js',
    // Handle file imports
    '\\.(jpg|jpeg|png|gif|webp|svg|woff2)$': '<rootDir>/test/mocks/fileMock.js',
    // Handle "@/" path alias
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    '\\.(ts|tsx|js)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
};

module.exports = config;
