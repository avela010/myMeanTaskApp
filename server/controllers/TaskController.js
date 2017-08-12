var restFul = require('node-restful');

module.exports = function(app, route){

	// setup controller for REST.
	var rest = restFul.model(
		'task',
		app.models.task
	).methods(['get', 'put', 'post', 'delete']);

	// Resgister this endpoint with the application.
	rest.register(app, route);

	// Return Middleware
	return function(request, response, next){
		next();
	};
};




