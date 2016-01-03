(function() {
  angular.module("saving-throw")
    .service("backgroundService", function(characterService, $meteor) {

    var service = {};
    var backgrounds = $meteor.collection(Backgrounds);

    service.getBackgroundActual = function(backgroundName) {
      var background = _.find(backgrounds, function(_background) {
        if (backgroundName === _background.name) { return _background; }
      });

      return background;
    };

    service.applyBackground = function(backgroundName, character) {
      var background = service.getBackgroundActual(backgroundName);

      characterService.applyBonuses(background, character);
      character.bonus.background.name = background.name;
    };

    service.checkProficiency = function(proficiency, character) {
      var background = service.getBackgroundActual(character.background);

      if (_.isNull(background)) {
        return false;
      } else {
        return _.find(background.bonus.proficiencies, function(_proficiency) {
          return _proficiency == proficiency ;
        });
      }
    };

    return service;

  });
})();
