var WebSocket = require('ws');

module.exports.createWebSocketClient = function() {
  var ws = new WebSocket('ws://192.168.2.26:8080/stream');

  ws.on('open', function open() {
    ws.send('test');
  });

  ws.on('message', function(data, flags) {
    console.log("Data: %s", data);
  });
}
