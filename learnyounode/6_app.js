var mod = require('./6_module');

var dir = process.argv[2];
var ext = process.argv[3];

// Call the module function
mod(dir, ext, function(err, files) {
  if (err) {
    console.log('An error has occoured!');
    console.log(err);
    return;
  }

  files.forEach(function (f) {
    console.log(f);
  });
});
