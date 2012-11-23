
// Requires
var express = require('express'),
	exec 	= require('child_process').exec;

// Create app
var app = express();


// Default action
app.get('/', function(req, res){
	exec('python ./pachow.py', function(error, stdout, stderr){
		console.log("Generated pachow: " + stdout);	
		res.send(stdout);
	});
});


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
