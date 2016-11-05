"use strict";

var Robot = (function (robotWeapons) {


robotWeapons.Arsenal = {};

robotWeapons.Arsenal.Weapon = function() {
  this.name = "no-weapon";
  this.damage = 0;
};

robotWeapons.Arsenal.Sawblade = function() {
  this.name = "sawblade";
  this.damage = 100;
};
robotWeapons.Arsenal.Sawblade.prototype = new robotWeapons.Arsenal.Weapon();

robotWeapons.Arsenal.Flamethrower = function() {
  this.name = "flamethrower";
  this.damage = 150;
};
robotWeapons.Arsenal.Flamethrower.prototype = new robotWeapons.Arsenal.Weapon();

robotWeapons.Arsenal.Laser = function() {
  this.name = "laser";
  this.damage = 50;
};
robotWeapons.Arsenal.Laser.prototype = new robotWeapons.Arsenal.Weapon();

return robotWeapons;

})(Robot || {});