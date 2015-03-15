var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var file = process.argv[3];

//console.log('port: ' + port + '. file: ' + file);

var server = http.createServer(function (req, res) {
  res.writeHead(200);

  var read = fs.createReadStream(file);
  read.on('open', function () {
    read.pipe(res);
  });

}).listen(port);
