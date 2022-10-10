module.exports = {
  testEnvironment: 'njsdom',
  testPathIginorePatterns: ['/node_modules/', './next'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
