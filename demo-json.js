var http = require('http');
var options = {
   host: 'localhost',
   port: '8000',
   path: '/calculation'  
};

var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(JSON.stringify([{ a: 1 }, {b:2}]));
});

server.listen(options);



/*var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});
app.listen(4000);*/