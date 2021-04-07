module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setup.test.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.scss$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
