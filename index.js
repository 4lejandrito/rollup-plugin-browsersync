var bs = require('browser-sync').create('rollup');

module.exports = function browsersync(options) {
    if (!bs.active) {
        bs.init(options || {server: '.'});
    }

    return {
        name: 'browsersync',
        generateBundle: function(options, {}, isWrite) {
            if (isWrite) {
                bs.reload(options.file);
            }
        }
    }
};
