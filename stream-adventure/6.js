// Concat Stream
// Take input from process.stdin and reverse it and output it through stdout
var concat = require('concat-stream');
var reverse = require('reverse-string');

process.stdin.pipe(concat(function (body) {
    //console.log(body.toString());
    //console.log('Called');
    process.stdout.write(reverse(body.toString()));
}));
