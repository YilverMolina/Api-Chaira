var express = require('express');

var server = express();

server.use('/', express.static(__dirname + '/public'));

//Quitar el # de angular
server.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

server.get('/callback-token', function(req, res) {
    res.send(req.query);
});

server.listen(8081, function() {
    console.log('Example app listening on port 8081!');
});
