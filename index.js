var bs = require('browser-sync').create('rollup');

module.exports = function browsersync(options) {
    if (!bs.active) {
        bs.init(options || {server: '.'});
    }

    return {
        name: 'browsersync',
        writeBundle: function(options) {
            bs.reload(options.file);
        }
    }
};
