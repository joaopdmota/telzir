const path = require('path');

module.exports = {
    process(...params) {
        return (
            'module.exports = ' + JSON.stringify(path.basename(params[1])) + ';'
        );
    },
};
