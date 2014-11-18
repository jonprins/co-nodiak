'use strict';

var client = require('./lib/client');

module.exports = {
    getClient : function(protocol, host, port) {
	return client(protocol, host, port);
    }
};
