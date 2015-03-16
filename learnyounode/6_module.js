var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  dir = (dir === undefined ? '.' : dir);
  ext = (ext === undefined ? '' : ext);

  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    }

    // Check if there isn't any extension supplied => simply return
    // all the files in the directory.
    if (ext == '') {
      return callback(null, files);
    }


    var list = []; // array of all the files that matches the extension filter

    // Go through all the files array
    files.forEach(function (f) {
      // Get the extension of the file and remove "."
      fext = path.extname(f).replace('.', '');
      // Check if the file's extension is same as ext supplied as argument
      if (fext == ext) {
        // Add this file to the list array
        list.push(f);
      }
    });

    // return the list with the callback function.
    callback(null, list);

  });
}
