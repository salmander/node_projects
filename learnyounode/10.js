/*
** TCP time server example.
*/

var net = require('net');
var du = require('date-util');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  //console.log('Connected');
  var date = new Date().format('yyyy-mm-dd HH:MM');

  socket.write(date);
  socket.end('\n');
}).listen(port);
