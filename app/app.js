var Application = require('ribbons.application');

var app = new Application({
  directory: __dirname,
  debug: true
});

// initialize the app
app.init();

module.exports = app;
