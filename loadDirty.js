
var redis = require('redis'),
	_ = require('underscore');

var dirty =  require('./dirty.json');
var redisClient = redis.createClient();

redisClient.on('ready', function () {
    console.log('connected to redis');
    _.each(dirty.profanities, function (profanity) {
        redisClient.sadd('pachow::profanities', profanity);
    });

    _.each(dirty.nouns, function (noun) {
        redisClient.sadd('pachow::nouns', noun);
    });
    console.log('done');
    process.exit(code=0);
});
