// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  setupFiles: ['<rootDir>/web/test/setup.js'],
}

module.exports = config
