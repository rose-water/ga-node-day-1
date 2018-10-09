const express = require('express');
const request = require('request');
const app     = express();
const PORT    = 3000;

// tell our app where to serve our static files
app.use(express.static('public'));

// define a route - what happens when people visit /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// example API request - more on this on thursday
let url = 'https://api.carbonintensity.org.uk/intensity/factors';
let options = {
  json: true
};

request(url, options, function(err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(body.data);
  } else {
    console.log(err);
  }
}); 

// tell our app where to listen for connections
app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});

