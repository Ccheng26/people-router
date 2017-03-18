const express = require ('express'),
      mustache = require('mustache-express'),
      pgp = require(process.env.DATABASE_URL || 'pg-promise')(),
      db = pgp('postgres://ccheng@localhost:5432/spotify/'),
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

  app.use(methodOverride('_method'));
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());
}
