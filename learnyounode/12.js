/* Take input stream and UPPERCASE everything and return as a response. */
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, resp) {
  resp.writeHead(200);
  req.on('data', function (data) {
    resp.write(data.toString().toUpperCase());
  });

  req.on('end', function () {
    resp.end();
  })
}).listen(port);
