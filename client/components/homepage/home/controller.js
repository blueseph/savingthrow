(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("indexCtrl",
              ["$scope",
               "$location",
                indexCtrl]);

    function indexCtrl($scope, $location) {
        $scope.register = function() {
          $location.path('/register');
        };
    }
})();
