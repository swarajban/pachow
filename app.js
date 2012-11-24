// PACHOW
// Swaraj

// Requires
var express = require('express'),
	exec 	= require('child_process').exec;

// Create app
var app = express();


// Default action
app.get('/', function(req, res, next){
	var pachowPath = '/usr/bin/python ' + __dirname + '/pachow.py';
	exec(pachowPath, function(error, stdout, stderr){
		if(error){
			next(error);
		}
		console.log("Generated pachow: " + stdout);	
		res.send(stdout);
	});
});

// Middleware
app.use(express.errorHandler({showStack: true, dumpExceptions: true}));



// Configure dev vs. prod settings
app.configure('development', function(){
	console.log("App in development mode");
});

app.configure('production', function(){
	console.log("App in production mode");
});


var port = 8123;
// Start app!
app.listen(port);
console.log("Listening on port " + port);
