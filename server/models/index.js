const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(process.env.DBURL, {
    keepAlive: true
});
module.exports.User = require('./user.js');
