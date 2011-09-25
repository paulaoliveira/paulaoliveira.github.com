var express = require('express')
  , path    = require('path')
  ;

console.log(path.normalize(__dirname + '/../../static'))

module.exports =
  function (app) {
    app.configure(function(){
      app.use(express.bodyParser());
      app.use(app.router);
      app.use(express.static('/../../static'));
    });
    process.on('uncaughtException', function(err) {
      console.log(JSON.stringify(err));
    });
  };