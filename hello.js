var http = require('http');
//var port = 8000;
var options = {
   host: 'localhost',
   port: '8000',
   path: '/meena'  
};


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});


// Listen on port 8000, IP defaults to 127.0.0.1
//server.listen(port);
server.listen(options);
