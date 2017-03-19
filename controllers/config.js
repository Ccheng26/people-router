const express = require ('express'),
      mustache = require('mustache-express'),
      methodOverride = require('method-override'),
      bodyParser = require('body-parser'),
      route = require('./routes'),
      path = require('path');

module.exports = function(app) {
  //templating set as mustache
  app.engine('html', mustache());
  app.set('view engine','html');

  //look for static files here
  app.use(express.static(path.join(__dirname, '..', 'public')));

  //method override for put and delete requests
  app.use(methodOverride('_method'));

  //body parser retrieves form data and stores in req.body
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());
}

