// Require the file system
var fs = require('fs');

// Require Path module for file extension filteration
var path = require('path');

// Dir name
var dname = process.argv[2];

// File extension to search for
var ext = process.argv[3];

// If no directory name supplier, look in current folder.
dname = (dname === undefined ? '.' : dname);

// If no file filter provided look for all files
ext = (ext === undefined ? '' : ext);

//console.log('Searching for files in ' + dname);

fs.readdir(dname, function(err, files) {
  // Go through all the files found array
  files.forEach(function (f) {
    // If we are looking for all files
    if (ext == '') {
      console.log(f);
    } else {
      // Get the file extension using path.extname and remove . from it
      var fext = path.extname(f).replace('.', '');
      // Check if the
      if (fext == ext) {
        console.log(f);
      }
    }
  });


});
