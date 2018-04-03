const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  setupTestFrameworkScriptFile: '<rootDir>/.jest/runtime.js',
  "transform": {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest"
  },
  "moduleFileExtensions": [
    "js"
  ]
}
