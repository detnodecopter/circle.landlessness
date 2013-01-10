var Flight = require('../../../../robot-ribbons/ribbons.controllers.flight');

var arDroneFlight = new Flight();

arDroneFlight.init = function () {
  this.setPlatform(this.platforms.arDrone);
};

module.exports = {
  arDroneFlight: arDroneFlight
}

