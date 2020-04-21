const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../'),
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    __dirname,
    'shared',
  ],
  moduleNameMapper: {
    '\\.module\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
}
