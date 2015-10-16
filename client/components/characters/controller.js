(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("charCtrl",
              ["$scope",
               "$location",
               "$meteor",
               "$stateParams",
               "$rootScope",
                charCtrl]);

    function charCtrl($scope, $location, $meteor, $stateParams, $rootScope) {

      $scope.characters = $meteor.collection(Characters).subscribe('characters');

      if ($stateParams.id) {
        var char = $scope.character;

        char = $meteor.object(Characters, $stateParams.id).subscribe('characters');

        if (char.newCharacter) {
          $location.path('/create/' + char._id);
        }
      }

      $scope.selectCharacter = function(characterId) {
        $location.path('/character/'+characterId);
      };

      $scope.newCharacter = function() {
        var character = {
          owner: $rootScope.currentUser._id,
          newCharacter: true,
          status: []
        };

        $scope.characters.save(character).then(function(status) {
          var id = status[0]._id;
          $location.path('/create/' + id);
        });
      };
    }
})();
