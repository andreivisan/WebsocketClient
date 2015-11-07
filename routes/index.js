var express = require('express');
var router = express.Router();

var WebSocket = require('ws');
var wsClient = require('../ws-client/index')

/* GET home page. */
router.get('/', function(req, res) {
  //wsClient.createWebSocketClient();

  var ws = new WebSocket('ws://192.168.2.26:8080/stream');

  ws.on('open', function open() {
    ws.send('test');
  });

  ws.on('message', function(data, flags) {
    console.log("Socket response arrived!");
    res.render('index', { title: 'Express', image:data});
  });

});

module.exports = router;
