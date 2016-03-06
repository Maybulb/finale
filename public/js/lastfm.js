var request = require('request');
var LastFmNode = require('lastfm').LastFmNode;
var util = require('util');

var lastfm = new LastFmNode({
  api_key: 'e2a6b6788c47485e6428a3dc6c1bfdd3',
  secret: '3e1b84dc73b310e41dbbde2daa5eb1d4',
});

function token() {
  var url = util.format("http://ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=%s&api_sig=%s&format=json", lastfm.api_key, lastfm.secret)

  request(url, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      return (JSON.parse(body).token) // I need to add promises so this doesn't return undefined
    }
  });

}

function auth() {
  var url = util.format("http://www.last.fm/api/auth/?api_key=%s&token=%s", lastfm.api_key, token())
  return url;
}

function init() {
  auth()
}

console.log(auth())
