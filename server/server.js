var express = require('express');
var uuid = require('node-uuid');
var app = express();

var activeGames = [];

app.use(express.static('../app'));

app.post('/newgame', function(req, res) {
    var newgame = uuid.v4();
    
    activeGames.push({id: newgame});
    
    res.send(newgame);
});

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP;
  var port = server.address().port;

  console.log('Destroy Tom Servo listening at http://%s:%s', host, port);

});
