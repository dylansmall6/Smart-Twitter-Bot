var Twit = require('Twit')
var data = require('./config')

var bot = new Twit(data)

setInterval(tweetNumber, 1000 * 12);

function tweetNumber() {
    var randNum = Math.floor(Math.random() * 101) + 1;
    var params = { status: randNum }
    function tweet(err, data, response) {
        console.log('executed tweet: status:' + params.status);
    }
    bot.post('statuses/update', params, tweet)
}
