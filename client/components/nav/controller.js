(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("navCtrl",
              ["$scope",
               "$location",
                navCtrl]);

    function navCtrl($scope, $location) {
      $scope.currentPath = $location.path();
    }
})();
