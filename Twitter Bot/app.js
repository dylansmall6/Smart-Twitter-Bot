var Twit = require('Twit')

var bot = new Twit({
    consumer_key: 'lLDHC51xKocDAMt1garJiSF49',
    consumer_secret: 'WpYpciIV2ZBSBqWsWUElrk6pzI9kDdXsxcPjSw9K4JCLAmjFbv',
    access_token: '917387499487539202-93JydWgvupWuEx8TzRUWIzJ29QatIeN',
    access_token_secret: 'BLXyZ6QBiTiTNK7bugDKqRWIxdtzvmRUGQMdEbSkz1O5g',
    timeout_ms: 60 * 1000,
})

setInterval(tweetNumber, 1000 * 12);

function tweetNumber() {
    var randNum = Math.floor(Math.random() * 101) + 1;
    var params = { status: randNum }
    function tweet(err, data, response) {
        console.log('executed tweet: status:' + params.status);
    }
    bot.post('statuses/update', params, tweet)
}
