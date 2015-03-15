var fs = require("fs");
var file = process.argv[2];

if (file != "undefined") {
	// counting number of lines in the file
	var f = fs.readFileSync(file).toString().split("\n").length -1;

	console.log(f);
}
