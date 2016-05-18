exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

var express = require('express');
var app = express();

app.use(express.static('pages'));

var port = (process.env.PORT || 5000);

app.listen((process.env.PORT || 5000), function() {
  console.log('Node app is running on port', port);
})
