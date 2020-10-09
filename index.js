var bs = require('browser-sync').create('rollup');

module.exports = function browsersync(browserSyncOptions) {
    return {
        name: 'browsersync',
        writeBundle: function(options) {
            if (!bs.active) {
                bs.init(browserSyncOptions || {server: '.'});
            } else {
                bs.reload(options.file);
            }
        }
    }
};
