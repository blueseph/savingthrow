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

      $scope.log = function(character) {
        console.log(character);
      };

      $scope.characters = $meteor.collection(Characters).subscribe('characters');

      if ($stateParams.id) {
        $scope.character = $meteor.object(Characters, $stateParams.id).subscribe('characters');

        var char = $scope.character;

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
