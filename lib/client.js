var nodiak = require('nodiak');
var thunklace = require('./thunklace');
var bucket = require('./bucket');
var counter = require('./counter');
var mapred = require('./mapred');

module.exports = function(protocol, host, port) {
    var riak = nodiak.getClient(protocol, host, port);

    riak = thunklace(riak, ['ping', 'stats', 'resources']);

    riak.bucket = (function(r) {
	return function() {
	    return bucket(r.bucket.apply(r, arguments));
	};
    })(riak);
    riak.counter = (function(r) {
	return function() {
	    return counter(r.counter.apply(r.counter, arguments));
	};
    })(riak);
    riak.mapred.inputs = (function(r) {
	return function() {
	    return mapred(r.mapred.inputs.apply(r.mapred, arguments));
	};
    });
};
