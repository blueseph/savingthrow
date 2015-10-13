(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("charCtrl",
              ["$scope",
               "$location",
               "$meteor",
                charCtrl]);

    function charCtrl($scope, $location, $meteor) {
      $scope.characters = $meteor.collection(Characters);
    }
})();
