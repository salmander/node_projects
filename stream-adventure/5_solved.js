// Get data from STDIN and uppercase EVEN lines and output to STDOUT
var split = require('split');
var through = require('through2');

var stream = through(write);
var i = 1;

function write(buffer, encoding, next) {
    var str = buffer.toString().toLowerCase();
    if (i % 2 == 0) {
        str = str.toUpperCase();
    }
    //console.dir('Write Called');;
    this.push(str + "\n");
    //this.push(str);

    i++;
    next();
}

//process.stdin.pipe(split());
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
