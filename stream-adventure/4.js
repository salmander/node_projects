// Get data from STDIN and uppercase everything and output to STDOUT
var through = require('through2');

var stream = through(write, end);

//process.stdin.pipe(stream).pipe(process.stdout());

function write(buffer, encoding, next) {
    var str = buffer.toString();
    //console.log('write called');
    this.push(str.toUpperCase());
    next();
}

function end(done) {
    done();
}

//process.stdin.pipe(process.stdout);
process.stdin.pipe(stream).pipe(process.stdout);
