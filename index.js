var BrowserSync = require("browser-sync");

function getBrowserSyncInstance(options) {
    if (BrowserSync.has('rollup')) {
        BrowserSync.get('rollup').exit();
    }

    var bs = BrowserSync.create('rollup');
    bs.init(options);

    return bs;
}

module.exports = function browsersync(options) {
    var bs = getBrowserSyncInstance(options || {server: '.'});

    ['SIGINT', 'SIGTERM'].forEach(
        function(signal) {
            process.on(signal, function() {
                bs.exit();
            });
        }
    );

    return {
        name: 'browsersync',
        onwrite: function(bundle) {
            bs.reload(bundle.dest);
        }
    }
};
