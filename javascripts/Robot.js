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
Featherweight.prototype = new Robot();

var LunchboxBot = function() {
    this.weapon = "lunchfire";
    this.weaponDamage = 100;
    this.healthBonus = 50;
};
Featherweight.prototype = new Robot();

var newToaster = new ToasterBot();























