// Http Server to return response UPPERCASED for only POST requests
var http = require('http');

var server = http.createServer(function (req, resp) {
    if (req.method === 'POST') {
        console.log(req.params);
    }

    resp.end('End');
}).listen(process.argv[2]);
