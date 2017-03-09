var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(bodyParser.json()); 

app.get('/', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});

app.post('/calc', function (request, response) {
     response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept');
     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     response.writeHead(200, { "Content-Type": "application/x-www-form-urlencoded" });
      console.log('server entered.....')
    var obj1 = request.body.a;
    var obj2 = request.body.b;
    var obj3 = parseInt(obj1)+parseInt(obj2);
    response.send(JSON.stringify([{
        "answer" :obj3
    }]));
}); 

/*app.get('/calc', function (request, response) {
     response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept');
     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     response.writeHead(200, { "Content-Type": "text/plain" });
      console.log('server entered.....')
    var obj1 = 1//request.body.a;
    var obj2 = 2//request.body.b;
    var obj3 = 3//parseInt(obj1)+parseInt(obj2);
    response.end(JSON.stringify([{
        "answer" : obj3
    }])); 
}); */

app.get('/getdemojson', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,Content-Type, Accept');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(JSON.stringify([{
        "College": "SIT",
        "Dept": "IT"
    },
    {
        "College": "KLN",
        "Dept": "CSE"
    }
    ]));
});
app.listen(4200);
