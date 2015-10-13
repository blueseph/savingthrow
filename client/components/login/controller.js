(function() {
  'use strict';

  angular.module("saving-throw")
    .controller("loginCtrl", ["$scope",
      "$location",
      "$meteor",
      loginCtrl
    ]);

  function loginCtrl($scope, $location, $meteor) {
    $scope.toRegister = function() {
      $location.path('/register');
    };

    $scope.doLogin = function() {
      if ($scope.email && $scope.password) {
        $meteor.loginWithPassword($scope.email, $scope.password).then(function() {
          $location.path('/lobby');
        }, function(err) {
          Materialize.toast('Username or password is incorrect', 4000, 'failure-toast');
        });
      } else {
        Materialize.toast('Please enter a username and password', 4000, 'failure-toast');
      }
    };
  }
})();
