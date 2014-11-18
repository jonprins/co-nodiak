var thunkify = require('thunkify');

module.exports = function(obj, fns) {
    fns.forEach(function(fn) {
	obj[fn] = thunkify(obj[fn]);
    });
    return obj;
};
