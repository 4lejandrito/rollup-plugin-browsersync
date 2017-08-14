var bs = require("browser-sync").create();

module.exports = function browsersync(options) {
    bs.init(options);

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
