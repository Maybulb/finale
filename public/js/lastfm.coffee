request = require('request')
util    = require('util')
open    = require('open')

lastfm =
  api_key: 'cc9f13aac2db0b7bb34c27466debea9a'
  secret: 'c48542a15d29ce7d469a05c5f34b5f39'
  url: 'http://ws.audioscrobbler.com/2.0/'

token = (cb) ->
  url = util.format('%s?method=auth.getToken&api_key=%s&api_sig=%s&format=json', lastfm.url, lastfm.api_key, lastfm.secret)
  request url, (err, res, body) ->
    if !err and res.statusCode == 200
      cb JSON.parse(body).token
    return
  return

auth = (cb) ->
  token (token) ->
    url = util.format('http://www.last.fm/api/auth/?api_key=%s&token=%s', lastfm.api_key, token)
    open(url)
    return
