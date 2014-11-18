var thunkify = require('thunkify');
var transformthunk = require('./transformthunk');
var RObject = require('./robject');

function wrapReturnedObjects(err, objs) {
    if(objs && objs.length) {
	objs = objs.map(function(obj) {
	    return RObject(obj);
	});
    }
    return [err, objs];
}

module.exports = function(bucket) {
    bucket.object.exists = thunkify(bucket.object.exists);
    ['get', 'save', 'delete', 'all'].forEach(function(fn) {
	bucket.objects[fn] = transformthunk(bucket.objects[fn], wrapReturnedObjects);
    });
    ['solr', 'twoi'].forEach(function(fn) {
	bucket.search[fn] = thunkify(bucket.search[fn]);
    });
    

    return bucket;
};
