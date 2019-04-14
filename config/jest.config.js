const path = require('path');
const assign = require('assign-deep');
const preset = require('@alexghenderson/jest-preset');

const config = assign({}, preset, {
  rootDir: path.resolve(__dirname, '..'),
  coverageDirectory: '<rootDir>/coverage',
  projects: [
    assign({}, preset.projects[0], {
      rootDir: path.resolve(__dirname, '..'),
      clearMocks: true,
      setupFiles: ['<rootDir>/test/configure-enzyme.js'],
      setupFilesAfterEnv: ['<rootDir>/test/after-env.js'],
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
    }),
    assign(
      {
        rootDir: path.resolve(__dirname, '..'),
      },
      preset.projects[1]
    ),
  ],
});

module.exports = config;
