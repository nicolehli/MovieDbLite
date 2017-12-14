var express = require('express');
var app = express();
var request = require("request");

// ROUTE
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/results', function (req, res){
    request('http://www.omdbapi.com/?s=starwars&apikey=thewdb&', function(error, response, body){
      // body returns as a string, needs parser
      var parsedData = JSON.parse(body);
      res.send(parsedData['Search'][0]['Title']);
    });
  }
);

// start server
// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log("Server started. Listening on port: " + port + " !");
});
