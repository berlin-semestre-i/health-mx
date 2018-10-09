module.exports = {
  setupFiles: ['./jest.setup.js', 'jest-canvas-mock'],
  testPathIgnorePatterns: ['.next', './node_modules'],
  testURL: 'http://0.0.0.0',
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'utils/*.{js}',
  ],
}