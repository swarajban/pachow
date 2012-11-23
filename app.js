
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




// Configure dev vs. production settings
var port = 3000;
app.configure('development', function(){
});

app.configure('production', function(){
	port = 80;
});

// Start app!
app.listen(port);
console.log("Listening on port " + port);
