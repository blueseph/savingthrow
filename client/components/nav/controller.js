(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("navCtrl",
              ["$scope",
               "$location",
                navCtrl]);

    function navCtrl($scope, $location) {
      $scope.isEntry = function() {

        if ($location.path() === '/') {
          return true;
        }

        if ($location.path().indexOf('terms') > -1 || $location.path().indexOf('privacy') > -1) {
          return true;
        }

        return false;
      };

      $scope.isLoginArea = function() {

        if ($location.path().indexOf('register') > -1 || $location.path().indexOf('login') > -1) {
          return true;
        }

        return false;

      };
    }

})();
