var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the Application
var app = express();
var port = 3000;

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	response.header('Access-Control-Allow-HEADERS', 'Content-Type');
	next();
});

// app.use('/hello', function(request, response, next){
// 	response.send('Hello World!');
// 	next();h
// });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/taskDB');
mongoose.connection.once('open', function(){

	//load the models
	app.models = require('./models/index');

	// load the routes
	var routes = require('./routes');

	_.each(routes, function(controller, route){
		app.use(route, controller(app, route));
	});

	console.log('listening to port '+ port + '...');
	app.listen(port);
});