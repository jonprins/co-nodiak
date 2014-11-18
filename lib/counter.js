var thunklace = require('./thunklace');

module.exports = function(counter) {
    return thunklace(counter, ['add', 'subtract', 'value']);
};
