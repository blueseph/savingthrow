(function() {
  angular.module("saving-throw")
    .service("characterService", function() {
    vm = this;

    // bonus will always be an array
    vm.applyBonuses = function(bonus, character) {
      vm.resetCharacter(character);
      character.bonus[bonus.type] = {};

      _.each(bonus.bonus, function(value, key) {
        if (_.isArray(value)) {
          character.bonus[bonus.type][key] = character.bonus[bonus.type][key] || {} ;
          _.each(value, function(_bonus) {
            character.bonus[bonus.type][key][_bonus] = true;
          });
        } else {
          character.bonus[bonus.type][key] = value;
        }
      });

      vm.buildComputedStats(character);
    };

    vm.resetCharacter = function(character) {
      character.bonus = {};
      character.calculatedValues = {};
    };

    vm.buildComputedStats = function(character) {
      character.computedStats = {};
      var cStats = character.computedStats;

      // go through the base character
      _.each(character.base, function(bonus, attribute) {
        cStats[attribute] = cStats[attribute] || {};
        if (_.isArray(bonus)) {
          cStats[attribute][bonus] = true;
        } else if (_.isObject(bonus)) {
          _.each(_.keys(bonus), function(key) {
            cStats[attribute][key] = bonus[key];
          });
        } else {
          delete cStats[attribute];
        }
      });

      //then add all the bonuses
      _.each(character.bonus, function(origin) {
        _.each(origin, function(bonus, attribute) {
          if (_.isObject(bonus)) {
            _.each(bonus, function(value, skill) {
                cStats[attribute] = cStats[attribute] || {};
                cStats[attribute][skill] = value;
            });
          }
        });
      });
    };

    vm.deleteSubrace = function() {
      delete $scope.character.subrace;
    };

    return vm;

  });
})();
