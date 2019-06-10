var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/shopping', (req, res) => {
  res.send([1,2,3]);
});
// var http = require('http');
// var app = http.createServer(function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ a: 1 }));
// });
// app.set('title', 'My Site');
// app.get('title');
//  res.json({"foo": "bar"});

app.listen(5000, () => console.log('Listening on port 5000'));
