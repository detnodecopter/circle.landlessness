var Controller = require('ribbons.controller');

var mainController = new Controller();

mainController.init = function () {
  this.onto(this.sensors.keyboard, 'stroke');
}

mainController.onKeyboardStroke = function(data) {
  this.sensors.keyboard.info(data);
  switch (data) {
    case ' ':
      this.controllers.arDroneFlight.stop();
      this.controllers.arDroneFlight.land();    
      break;
    case 't':
      this.controllers.arDroneFlight.takeoff();
      break;
    case 'c':
      this.controllers.arDroneFlight.clockwise(6);
      break;
    case 'l':
      this.controllers.arDroneFlight.left(1);
      break;
    case 'h':
      this.controllers.arDroneFlight.hover();
      break;
  }
}

mainController.start = function () {
  var self = this;

  var radius = 1;     // meters
  var flightTime = 1; // seconds

  var angularVelocity = 2 * Math.PI / flightTime; 
  // radians per second
  
  var speed = 2 * Math.PI * radius / flightTime; 
  // meters per second

  // takeoff
  this.controllers.arDroneFlight.takeoff();

  // after a brief delay, fly in a circle clockwise once
  setTimeout(function() {
    self.controllers.arDroneFlight.left(speed);
    self.controllers.arDroneFlight.clockwise(angularVelocity);
  },
  1000);
  
  // stop and land
  setTimeout(function() {
    self.controllers.arDroneFlight.hover();
    self.controllers.arDroneFlight.land();
  },
  10000);
}

module.exports = {
  mainController: mainController
};
