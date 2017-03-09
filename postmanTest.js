var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
})); 

app.post('/calc', function (request, response) {
    var obj1 = request.body.id;
    var obj2 = request.body.name;
    var obj3 = parseInt(obj1)+parseInt(obj2);
    response.send(obj3);
    response.send(JSON.stringify([{
        "answer" :"obj3"
    }]));
});

app.listen(4200);