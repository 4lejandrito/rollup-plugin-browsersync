const browsersync = require('../index')
const path = require('path')

module.exports = {
  input: path.join(__dirname, 'index.js'),
  output: {
    file: path.join(__dirname, 'bundle.js'),
    format: 'umd'
  },
  plugins: [
    browsersync({open: false, server: __dirname})
  ]
}
