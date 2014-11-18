var thunklace = require('./thunklace');

module.exports = function(RObject) {
    return thunklace(RObject, ['save', 'delete', 'fetch']);
};
