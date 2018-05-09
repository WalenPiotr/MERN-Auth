const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/calories-backend', {
    keepAlive: true
});
module.exports.User = require('./user');