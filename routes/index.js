var express = require('express');
var router = express.Router();

var wsClient = require('../ws-client/index')

/* GET home page. */
router.get('/', function(req, res) {
  wsClient.createWebSocketClient();

  res.render('index', { title: 'Express' });
});

module.exports = router;
