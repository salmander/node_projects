var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHeader(200);
    response.write('Hello....mate!' + "\n");

    // About to simulate long running events
    setTimeout(function() {
        response.write("This is end of long running process");
        response.end('Bye from node application.' + "\n"); 
    }, 5000);

    // End long running process simulation

//    response.end('Bye from node application.' + "\n");
});


server.on('close', function() {
    console.log('Server shutting down...goodbye!' + "\n");
});

server.listen(8080);


console.log('Node server listening on port 8080' + "\n");


