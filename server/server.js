var config    = require('konphyg')(__dirname + "/cfg")
  , path      = require('path')
  , www       = config('www')
  , express   = require('express')
  , app       = express.createServer()
  , configure = require('./cfg/environment')
  ;

configure(app);

app.get('/', function(request,response) {
  response.sendfile(path.normalize(__dirname + '/../index.html'));
});

app.listen(www.port||80);
console.log('surfs up!');