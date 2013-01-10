var Controller = require('ribbons.controller');

var mainController = new Controller();

mainController.init = function () {
  this.onto(this.sensors.keyboard, 'stroke');
}

mainController.onKeyboardStroke = function(data) {
  this.sensors.keyboard.info(data);
  switch (data) {
    case ' ':
      this.actuators.arDroneFlight.stop();
      this.actuators.arDroneFlight.land();    
      break;
    case 't':
      this.actuators.arDroneFlight.takeoff();
      this.actuators.arDroneFlight.hover();
      break;
    case 'c':
      this.actuators.arDroneFlight.clockwise(7);
      break;
    case 'l':
      this.actuators.arDroneFlight.left(1);
      break;
    case 'h':
      this.actuators.arDroneFlight.hover();
      break;
  }
}

mainController.start = function () {
  var self = this;

  // takeoff
  this.actuators.arDroneFlight.takeoff();

  // after a brief delay, fly in a circle clockwise once
  setTimeout(function() {
    self.actuators.arDroneFlight.left(1);
    self.actuators.arDroneFlight.clockwise(7);
  },
  2000);
  
  // stop and land
  setTimeout(function() {
    self.actuators.arDroneFlight.hover();
    self.actuators.arDroneFlight.land();
  },
  4000);
}

module.exports = {
  mainController: mainController
};
