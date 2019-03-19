// 'use strict';

// var mongoose = require('mongoose');

// var db = function(){
// 	return {
// 		config: function(conf){
// 			mongoose.connect('mongodb://localhost/tekbooks');
// 			var db = mongoose.connection;
// 			db.on('error', console.error.bind(console, 'Connection Error'));
// 			db.once('open', function(){
// 				console.log('DB Connection Open...');
// 			});
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// 	}
// }

// module.exports = db();

'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            const MongoClient = require('mongodb').MongoClient;
            const uri =
                'mongodb+srv://dbadmin:<Jdp8946mon90>@cluster0-bctit.mongodb.net/test?retryWrites=true';
            const client = new MongoClient(uri, { useNewUrlParser: true });
			console.log('from db.js', client)
			
			client.connect(err => {
                const collection = client.db('test').collection('devices');
                // perform actions on the collection object
                console.log(
                    '----------------------Mongo DB Open!! ----------------------'
                );
                client.close();
            });
        }
    };
};

module.exports = db();
