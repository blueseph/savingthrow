(function() {
  'use strict';

  angular.module("saving-throw")
    .controller("registerCtrl", ["$scope",
      "$location",
      "$meteor",
      "$timeout",
      registerCtrl
    ]);

  function registerCtrl($scope, $location, $meteor, $timeout) {
    $scope.toLogin = function() {
      $location.path('/login');
    };

    $scope.doRegister = function() {

      if ($scope.email && $scope.username &&
        $scope.password && $scope.passwordV) {
        $meteor.createUser({
          email: $scope.email,
          username: $scope.username,
          password: $scope.password,
        }).then(function() {
          Materialize.toast('Account creation successful! Redirecting in 3 seconds', 3000, 'success-toast');
          $timeout(function() {
            $location.path('/lobby');
          }, 3500);
        }, function(err) {
          Materialize.toast('Error creating account: ' + err.reason, 4000, 'failure-toast');
        });
      } else {
        Materialize.toast('Error creating account: The form is not filled out', 400, 'failure-toast');
      }

    };

    $scope.passwordVError = function() {
      if ($('[name="passwordV"]').val()) {
        if ($('[name="passwordV"]').val().length < 6) {
          return 'Password must be at least 6 characters';
        } else {
          return 'Passwords do not match!';
        }
      }

    };
  }
})();
