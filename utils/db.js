const mongoose = require('mongoose');

// create connection with mongodb database
module.exports = mongoose.connect('mongodb://localhost:27017/user')
	.then(() => console.log('connected to mongodb'))
	.catch(() => console.log('Not connected to mongodb'));