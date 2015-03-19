var request = require('request');
var url = 'http://localhost:8099';

var r = request.post(url);

process.stdin.pipe(r).pipe(process.stdout);
