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
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
