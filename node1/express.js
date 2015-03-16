var express = require('express');

var app = express();

var quotes = {"salmander": "hey this is salmander quote", 
              "tommy": "this is tommy's quote"};

app.get('/quote/:name', function(req, response) {
    console.log('get quote name called....' + "\n");
    var name = req.params.name;
    console.log('name: ' + name + "\n");
    var quote = quotes[name];
    console.log("quote: " + quote);
    response.end(name + "\n");
});

app.listen(8080);

console.log('Listening on port 8080' + "\n");
