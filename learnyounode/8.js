var http = require('http');
var bufferlist = require('bl');

var url = process.argv[2];

var bl = new bufferlist();

http.get(url, function(resp) {
  //resp.pipe(bl);
  resp.on('data', function(data) {
    bl.append(data);
    //console.log('data: ' + data.toString());
  });
  resp.on('end', function() {
    console.log(bl.length);
    console.log(bl.toString());
  });

}).on('error', function(err) {
  console.log('Error: ' + err.message);
});
