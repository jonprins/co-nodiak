var thunkify = require('thunkify');

module.exports = function(mapred) {
    mapred.execute = thunkify(mapred.execute);
    return mapred;
};
