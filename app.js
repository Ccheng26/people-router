// set up requirements for npm packages
const express = require ('express'),
      app = express(),
      PORT = process.env.PORT || 3000;

module.exports = app;

// require configuration set
require('./controllers/config')(app)

// add routes file
app.use(require('./controllers/routes'));

// generate port, set default to 3000 for now
app.listen(PORT, function(){
  console.log(`Server is alive on ${port}!`)
})
