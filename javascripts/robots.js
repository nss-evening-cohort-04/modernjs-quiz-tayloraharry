var Robot = (function(robots) {
/*
  TODO: Modularize this code with IIFE or Browserify
 */
robots.Combatants = {};
/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
robots.Combatants.Bot = function(name) {
  this.playerName = null;
  this.type = null;
  this.model = null;
  this.weapon = null;
};


return robots;
})(Robot || {});