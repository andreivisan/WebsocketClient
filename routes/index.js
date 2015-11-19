var express = require('express');
var router = express.Router();

var WebSocket = require('ws');
var wsClient = require('../ws-client/index')

var request = require("request");

/* GET home page. */
router.get('/', function(req, res) {
  //wsClient.createWebSocketClient();

  // var ws = new WebSocket('ws://192.168.2.26:8080/stream');
  //
  // ws.on('open', function open() {
  //   ws.send('test');
  // });
  //
  // ws.on('message', function(data, flags) {
  //   console.log("Socket response arrived! ");
  //   res.render('index', { title: 'Express', image:data});
  // });

  var url = "http://192.168.9.118:8080/get-media"

  request({
    url: url,
    json: true
  },
  function(error, response, body) {
    console.log("Response received %s", JSON.stringify(body));
  });

});

router.get('/get-image', function(req, res) {
  var url = "http://192.168.9.118:8080/get-image"

  request({
    url: url,
    json: true
  },
  function(error, response, body) {
    console.log("Response received ");
    res.render('index', { title: 'Express', image:response.body});
  });

});

module.exports = router;
