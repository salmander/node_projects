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
  //console.log('Processing URL: ' + url);
  console.log('Processing >> index: ' + index + ', url: ' + url);

  http.get(url, function(resp) {
    console.log('Resp url: ' + url);

    // Pipe response to the bl
    //resp.pipe(bls[count]);
    resp.pipe(bl(function (err, data) {
      if (err) {
        console.log('bl error: ');
        return console.error(err);
      }
      
      console.log('bls length before: ' + bls.length);
      // Add response to the bls
      bls[index] = {
        url: url,
        data: data.toString()
      };

      console.log('bls length after: ' + bls.length);
      if (bls.length == urls.length) {
        console.log('all complete..hurray...');
        console.log(bls);
        console.log();
        console.log();
      }
    }));

  }).on('error', function(err) {
    console.log('Error: ' + err.message);
  });
});
