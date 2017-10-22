var bs = require('browser-sync').create();

module.exports = function browsersync(options) {
    if (!bs.active) {
        bs.init(options || {server: '.'});
    }

    return {
        name: 'browsersync',
        onwrite: function(bundle) {
            bs.reload(bundle.dest);
        }
    }
};
