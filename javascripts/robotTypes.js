"use strict";

var Robot = (function (robotTypes) {

robotTypes.Types = {};

robotTypes.Types.Type = function() {
  this.name = "no-type";
};

robotTypes.Types.Drone = function() {
  this.name = "drone";
  this.wheels = 0;
};
robotTypes.Types.Drone.prototype = new robotTypes.Types.Type();

robotTypes.Types.Drone1 = function() {
  this.name = "drone1";
  this.health = Math.floor((Math.random() * 1000) + 500);
  this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.Drone1.prototype = new robotTypes.Types.Drone();

robotTypes.Types.Drone2 = function() {
  this.name = "drone2";
  this.health = Math.floor((Math.random() * 1000) + 500);
  this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.Drone2.prototype = new robotTypes.Types.Drone();


robotTypes.Types.Bipedal = function() {
  this.name = "bipedal";
  this.wheels = 0;
};
robotTypes.Types.Bipedal.prototype = new robotTypes.Types.Type();

robotTypes.Types.Bipedal1 = function() {
  this.name = "bipedal1";
  this.health = Math.floor((Math.random() * 1000) + 500);
    this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.Bipedal1.prototype = new robotTypes.Types.Bipedal();

robotTypes.Types.Bipedal2 = function() {
  this.name = "bipedal2";
  this.health = Math.floor((Math.random() * 1000) + 500);
    this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.Bipedal2.prototype = new robotTypes.Types.Bipedal2();


robotTypes.Types.ATV = function() {
  this.name = "atv";
  this.wheels = 0;
};
robotTypes.Types.ATV.prototype = new robotTypes.Types.Type();

robotTypes.Types.ATV1 = function() {
  this.name = "ATV1";
  this.health = Math.floor((Math.random() * 1000) + 500);
  this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.ATV1.prototype = new robotTypes.Types.ATV();

robotTypes.Types.ATV2 = function() {
  this.name = "ATV2";
  this.health = Math.floor((Math.random() * 1000) + 500);
  this.damageBonus = Math.floor((Math.random() * 3) + 1);
};
robotTypes.Types.ATV2.prototype = new robotTypes.Types.ATV();



return robotTypes;

})(Robot || {});