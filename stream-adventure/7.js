// Http Server to return response UPPERCASED for only POST requests
var http = require('http');
var through = require('through2');

var server = http.createServer(function (req, resp) {
    console.log("Request Method: " + req.method + "\n");
    if (req.method == 'POST') {
        console.log(req.param);
        req.on('data', function(data) {
            //console.log('Data received.');
            //console.log('data: ' + data);
        });

        req.on('end', function() {
            resp.end();
        });

        req.pipe(through()).pipe(resp);
    }

    //resp.end('End');
}).listen(process.argv[2]);
