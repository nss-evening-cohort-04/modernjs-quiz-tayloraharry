var Robot = function() {
    this.robotWeight = null;
    this.weapon = null;
    this.weaponDamage = null;
    this.health = 0;
};

/*Robot weight classes*/
var Featherweight = function() {
    this.robotWeight = "feather";
};
Featherweight.prototype = new Robot();

var Middleweight = function() {
    this.robotWeight = "middle";
};
Middleweight.prototype = new Robot();

var Heavyweight = function() {
    this.robotWeight = "heavy";
};
Heavyweight.prototype = new Robot();


/*Featherweight robots*/
var ToasterBot = function() {
    this.weapon = "toasterfire";
    this.weaponDamage = 150;
    this.healthBonus = 25;
};
ToasterBot.prototype = new Featherweight();

var LunchboxBot = function() {
    this.weapon = "lunchfire";
    this.weaponDamage = 100;
    this.healthBonus = 50;
};
LunchboxBot.prototype = new Featherweight();

/*MiddleWeight robots*/
var TrashcanBot = function() {
    this.weapon = "trashfire";
    this.weaponDamage = 100;
    this.healthBonus = 50;
};
TrashcanBot.prototype = new Middleweight();

var MicrowaveBot = function() {
    this.weapon = "microwaveFire";
    this.weaponDamage = 10;
    this.healthBonus = 125;
};
MicrowaveBot.prototype = new Middleweight();



















