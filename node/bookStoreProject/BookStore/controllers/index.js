'use strict';

var Book = require('../models/bookModel');

module.exports = function(router) {
    router.get('/', function(req, res) {
        Book.find({}, function(err, books) {
            res.render('index');
        });
    });
};
