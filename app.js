// set up requirements for npm packages

const express = require ('express'),
      app = express(),
      port = 3000;

module.exports = app;

// require configuration set
require('./controllers/config')(app)
// add routes file
app.use(require('./controllers/routes'));

// generate port, set default to 3000 for now
app.listen(port, function(){
  console.log(`Server is alive on ${port}!`)
})
