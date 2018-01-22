var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.job = 'find pollen';
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype)

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure)
}

ForagerBee.prototype.constructor = ForagerBee;
