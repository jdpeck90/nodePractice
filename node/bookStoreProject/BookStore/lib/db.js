'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            const MongoClient = require('mongodb').MongoClient;
            const uri =
                'mongodb+srv://dbadmin:<Jdp8946mon90>@cluster0-bctit.mongodb.net/test?retryWrites=true';
            const client = new MongoClient(uri, { useNewUrlParser: true });
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'Connection Error'));
            db.once('open', function() {
                console.log('DB COnnection Open...');
            });
        }
    };
};
module.exports = db();
