module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  workerIdleMemoryLimit: '512MB',
  logHeapUsage: true,
  runner: './jest-runner.js',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  moduleNameMapper: {
    '@api/(.*)': '<rootDir>/build/api/$1',
    '@lib/(.*)': '<rootDir>/build/lib/$1',
    '@server': '<rootDir>/build/server.js',
    '@policy': '<rootDir>/build/policy/index.js',
    '@dao/(.*)': '<rootDir>/build/dao/$1',
    '@service/(.*)': '<rootDir>/build/service/$1',
    '@schema': '<rootDir>/build/schema/index.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
