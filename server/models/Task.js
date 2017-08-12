var mongoose = require('mongoose');

// Create the Movie Schema
var TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}

});

module.exports = TaskSchema;

