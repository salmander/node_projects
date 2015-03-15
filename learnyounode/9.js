// Juggling ASync Excercise

// Get node http module
var http = require('http');

// Get b1 module (for collecting whole streams)
var bl = require('bl');

var urls = process.argv.slice(2);

//console.log(urls);

if (urls.length < 1) {
  console.error('Please provide some URLS as command line arguments.');
}

// bls is the list of url and its content
var bls = [];
count = 0;

// Go through each URL
urls.forEach(function (url, index) {
  //console.log('Processing >> index: ' + index + ', url: ' + url);

  http.get(url, function(resp) {

    // Pipe response to the bl
    resp.pipe(bl(function (err, data) {
      if (err) {
        console.log('bl error: ');
        return console.error(err);
      }

      // Add response to the bls
      bls[index] = {
        url: url,
        data: data.toString()
      };
      count++;

      if (count == urls.length) {
        //console.log(urls.length);
        for (i=0; i<urls.length; i++) {
          var bl_ob = bls[i];
          console.log(bl_ob.data);
        }
      }
    }));

  }).on('error', function(err) {
    console.log('Error: ' + err.message);
  });
});
