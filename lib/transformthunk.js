var thunkify = require('thunkify');


module.exports = function(fn, transform) {
    var thunk = thunkify(fn);

    return function() {
	var args = arguments;
	return function(done) {
	    thunk.apply(null, args)(function() {
		done.apply(null,
		    transform.apply(null, arguments)
		);
	    });
	};
    };
};
