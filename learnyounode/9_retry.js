// Take arguments from command line and show output in the same order

var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);

if (urls.length > 0) {
  var resps = []; // list containing responses
  var count = 0; // counter
  // Iterate over each url
  urls.forEach(function (url, index) {
    //console.log('Now processing ' + url);
    // Get the contents of the url
    http.get(url, function(resp) {
      // Pipe the response using Buffer List
      resp.pipe(bl(function(err, data) {
        if (err) {
          return console.error('BL error: ' + err);
        }
        // Add it to the resps array
        resps[index] = {
          url: url,
          index: index,
          resp: data.toString()
        };

        // Increment the counter
        count++;

        if (urls.length == count) {
          //console.log('All complete');
          resps.forEach(function (r) {
            console.log(r.resp);
          });
        }

      }));

    }).on('error', function (err) {
      return console.error('Error: ' + err);
    });
  });
}
