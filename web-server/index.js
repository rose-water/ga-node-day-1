const express = require('express');
const request = require('request');
const app     = express();
const PORT    = 3000;

// tell our app where to serve our static files
app.use(express.static('public'));

// -----------------------------------------------------
// define a route - what happens when people visit /
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// -----------------------------------------------------
// define another route - this just prints out the request params
// enter in your browser: http://localhost:3000/test?species=cats
app.get('/test', function(req, res) {
  let cats = ["Scottish Fold", "Russian Blue", "Ragdoll"];
  let dogs = ["Golden Retriever", "German Shepherd", "Alaskan Malamute"];
  
  if (req.query.species == 'cats') {
    res.send(cats);
  } else if (req.query.species == 'dogs') {
    res.send(dogs);
  } else {
    res.send("Unknown Species");
  }
});

// -----------------------------------------------------
// example API request - more on this on thursday
let url = 'https://api.carbonintensity.org.uk/intensity/factors';
let options = {
  json: true 
};

request(url, options, function(err, res, body) {
  if (!err && res.statusCode == 200) {
    // Uncomment the following to log the response data
    console.log(body.data);
  } else {
    console.log(err);
  }
}); 

// tell our app where to listen for connections
app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});