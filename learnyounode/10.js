/*
** Creating TCP date time server
*/

var net = require('net');
var du = require('date-util');

var port = process.argv[2];

if (port === undefined) {
  return console.error('Please provide a port tcp connection.');
}

var server = net.createServer(function (socket) {
  //console.log('Socket connected.');
  var d = new Date().format('yyyy-mm-dd HH:MM');

  socket.end(d + "\n");
}).listen(port);
