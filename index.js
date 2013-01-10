var app = module.exports = require('./app/app');

// start it up if requested
if (process.argv[2] === 'start') {
  app.start();
}
