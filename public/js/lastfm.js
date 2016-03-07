var request = require('request');
var util = require('util');

var lastfm = {
  api_key: 'cc9f13aac2db0b7bb34c27466debea9a',
  secret: 'c48542a15d29ce7d469a05c5f34b5f39',
  url: 'http://ws.audioscrobbler.com/2.0/'
}

function get_token(cb) {
  var url = util.format("%s?method=auth.getToken&api_key=%s&api_sig=%s&format=json", lastfm.url, lastfm.api_key, lastfm.secret)

  request(url, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      cb(JSON.parse(body).token)
    }
  });

}

function auth(callback) {
  get_token(function(token) {
    var url = util.format("http://www.last.fm/api/auth/?api_key=%s&token=%s", lastfm.api_key, token)
    location.href = url;
  })
}
