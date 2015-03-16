/*
** Take file from command line and serve it as html response
*/

var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var file = process.argv[3];

var server = http.createServer(function (req, resp) {
  resp.writeHead(200);
  var fread = fs.createReadStream(file).pipe(resp);
}).listen(port);
