var express = require('express');
var app = express();
var root = __dirname;
var path = require('path');


app.use(express.static(root));

app.get('/', function(req, res) {
  res.sendFile(path.join(root + '/public/example_simple_exportwav.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
