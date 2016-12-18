// requiring the HTTP interfaces in node 
var http = require('http'); 
var port = process.env.PORT || 80
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'});   
  res.end('Hello World f4\n'); 
}).listen(port);

// var index = '
// <html><body>
// <h1>Here is a link</h1>
// <a href = "https://google.com">Google!</a>
// </body></html>
// '