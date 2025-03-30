module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', 
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/tests/**/*.(test|spec).(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
    }
  };
  