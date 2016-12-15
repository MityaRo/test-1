// requiring the HTTP interfaces in node 
var http = require('http'); 
var port = process.env.PORT || 8080
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'});   
  res.end('Hello World\n'); 
}).listen(port);