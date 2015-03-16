var http = require('http');
var url = require('url');
var du = require('date-util');
var port = process.argv[2];

var server = http.createServer(function(req, resp) {
    var endpoint = url.parse(req.url, true);
    var iso = endpoint.query.iso;
    var date = new Date(iso);

    console.log(iso);
    var response = '';

    if (endpoint.pathname == '/api/parsetime') {
        response = {hour: parseInt(date.format('H')), minute: parseInt(date.format('M')), second: parseInt(date.format('s'))};
    } else if(endpoint.pathname == '/api/unixtime') {
        response = {unixtime: date.getTime()};
    }

    resp.end(JSON.stringify(response));
}).listen(port);
