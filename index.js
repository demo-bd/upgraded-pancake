const moment = require('moment');

const today = () => {
    return moment().format('DD-MM-YYYY');
};

const sum = function () {
    const args = Array.prototype.slice.call(arguments);

    if (!args.every(Number.isFinite)) {
        throw new TypeError('sum() expects only numbers.')
    }

    return args.reduce((a, b) => a + b, 0);
};

module.exports = {
    today,
	sum
};
