// PACHOW
// Swaraj

// Requires
var express = require('express'),
	redis = require('redis'),
	_ = require('underscore'),
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

app.get('/php', function(req, res, next){
	var pachowPath = '/usr/bin/php ' + __dirname + '/pachow.php';
	exec(pachowPath, function(error, stdout, stderr){
		if(error){
			next(error);
		}
		console.log("Generated pachow: " + stdout);	
		res.send(stdout);
	});
});

app.get('/bestFriends', function (req, res, next) {
    res.send('Is best-friends down? Yes');
});

var pachow = function(){
	var hards = ['p', 'ch', 'k', 't', 'w', 'z', 'm'];
	var vowels = ['i', 'o', 'a'];

	var pachow = "";

	var numSyllables = Math.floor(Math.random() * 4) + 1;

	for (var i = 0; i < numSyllables; i++){
		var hard = hards[Math.floor(Math.random()*hards.length)];
		var vowel = vowels[Math.floor(Math.random()*vowels.length)];
		pachow += hard + vowel;
	}

	pachow += hards[Math.floor(Math.random()*hards.length)];
	pachow += 'ow';
	return pachow;
}


app.get('/js', function(req, res, next){
	res.send(pachow());
});


app.get('/dirty', function (req, res) {
	var redisClient = redis.createClient();
	redisClient.smembers('pachow::profanities', function(err, profanities){
		var profanity = _.sample(profanities, 1)[0];
		redisClient.smembers('pachow::nouns', function(err, nouns){
			var noun = _.sample(nouns, 1)[0];
			var dirty = profanity + noun;
			res.send(dirty)
		});
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
