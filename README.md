# rollup-plugin-browsersync
Serve your bundle via Browser Sync

<a href="https://npmjs.org/package/rollup-plugin-browsersync">
  <img src="https://img.shields.io/npm/v/rollup-plugin-browsersync.svg?style=flat-squar" alt="NPM" />
</a>
  
## Installation
```
npm install --save-dev rollup-plugin-browsersync
```

## Usage
```js
// rollup.config.js
import browsersync from 'rollup-plugin-browsersync'

export default {
  entry: 'entry.js',
  dest: 'bundle.js',
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
