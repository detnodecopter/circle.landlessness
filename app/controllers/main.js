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
      this.controllers.arDroneFlight.hover();
      break;
    case 'c':
      this.controllers.arDroneFlight.clockwise(7);
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

  // takeoff
  this.controllers.arDroneFlight.takeoff();

  // after a brief delay, fly in a circle clockwise once
  setTimeout(function() {
    self.controllers.arDroneFlight.left(1);
    self.controllers.arDroneFlight.clockwise(7);
  },
  2000);
  
  // stop and land
  setTimeout(function() {
    self.controllers.arDroneFlight.hover();
    self.controllers.arDroneFlight.land();
  },
  4000);
}

module.exports = {
  mainController: mainController
};
