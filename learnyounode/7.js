var http = require('http');

var url = process.argv[2];

if (url === undefined) {
  console.log('No url provided. Please enter URL as a first argument');
  return;
}
//console.log(url);
http.get(url, function(resp) {
  // Check if there is an error
  resp.on('error', function(err) {
    console.error('Http get returned error');
    console.error(err.message);
    return;
  });

  resp.on('data', function(data) {
    var chunk;

    if (false !== (chunk = data.toString())) {
      console.log(chunk);
    }
  });
}).on('error', function(err) {
  console.error('Http client has encountered an error!');
  console.error(err);
});
