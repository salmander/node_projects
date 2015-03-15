// Require the filesystem module
var fs = require("fs");
// Get the filename from argv
var file = process.argv[2];

// Check if file is not undefined.
if (file != "undefined") {

	//Read File and count number of lines in the file

	// Synchronous Way
	//var f = fs.readFileSync(file).toString().split("\n").length -1;
	//console.log(f);

	// Asynchronous Way (Node.js way)
	fs.readFile(file, function(err, data) {
		console.log(data.toString().split("\n").length -1);
	});

}
