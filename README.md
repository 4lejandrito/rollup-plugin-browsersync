# rollup-plugin-browsersync
Serve your bundle via Browser Sync

[![npm version](https://badge.fury.io/js/rollup-plugin-browsersync.svg)](https://badge.fury.io/js/rollup-plugin-browsersync)
[![Build Status](https://travis-ci.org/4lejandrito/rollup-plugin-browsersync.svg?branch=master)](https://travis-ci.org/4lejandrito/rollup-plugin-browsersync)

## Installation
```
npm install --save-dev rollup-plugin-browsersync
```

## Usage
```js
// rollup.config.js
import browsersync from 'rollup-plugin-browsersync'

export default {
  input: 'entry.js',
  output: {
    file: 'bundle.js'
  },
  plugins: [
    browsersync({server: 'dist'})
  ]
}
```

### Options

See [Browsersync options](https://browsersync.io/docs/options).

By default:
```js
{
    server: '.'
}
```

## Contributing

Contributions and feedback are very welcome.
