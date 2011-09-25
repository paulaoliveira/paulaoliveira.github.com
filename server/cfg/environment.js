var express = require('express')
  , path    = require('path')
  ;

module.exports =
  function (app) {
    app.configure(function() {
      app.use(express.bodyParser());
      app.use(app.router);
      app.use(express.static(__dirname + '/../..'));
    });
    process.on('uncaughtException', function(err) {
      console.log(JSON.stringify(err));
    });
  };