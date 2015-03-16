/*
** Get POST request and convert it to uppercase and return it as a response
*/
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function (req, resp) {
    // Send http 200 response header
    resp.writeHead(200);
    // Listen for data events on request
    req.on('data', function (data) {
        // Convert data received to uppercase
        var uppercased = data.toString().toUpperCase();
        // Send response back
        resp.write(uppercased);

    });

    // Listen for request end event
    req.on('end', function () {
        // Close response stream
        resp.end();
    })

}).listen(port);
