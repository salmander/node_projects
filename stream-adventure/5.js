var through = require('through2');
var split = require('split');

var i = 1;

process.stdin.pipe(split()).pipe(through(function (buffer, encoding, next) {
        var str = buffer.toString().toLowerCase();
        if (i % 2 == 0) {
            str = str.toUpperCase();
        }
        this.push(str + '\n');
        i++;
        next();
    })).pipe(process.stdout);
