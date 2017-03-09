var http = require('http');

var options1 = {
   host: 'localhost',
   port: '8000',
   path: '/meena'  
};
var options2 = {
   host: 'localhost',
   port: '8100',
   path: '/calc'  
};
http.createServer(onRequest_a).listen(options1);
http.createServer(onRequest_b).listen(options2);

function onRequest_a (request, response) {
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
}

function onRequest_b (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept');
  response.writeHead(200, { "Content-Type": "text/plain" });
  //response.end(JSON.stringify([{"a": "1" }, {"b":"2"}]));
  response.end(JSON.stringify([
    {
      "College": "SIT",
      "Dept": "IT"
    },
    {
      "College": "KLN",
      "Dept": "CSE"
    }
  ]));
 
  }