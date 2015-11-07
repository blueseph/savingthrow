(function() {
  'use strict';

  angular.module("saving-throw")
    .controller("resetCtrl", ["$scope",
      "$location",
      "$meteor",
      "$timeout",
      "$stateParams",
      resetCtrl
    ]);

  function resetCtrl($scope, $location, $meteor, $timeout, $stateParams) {
    if ($stateParams.token) {
      Session.set('resetPassword', $stateParams.token);
    }

    $scope.doReset = function() {
      if ($scope.password == $scope.passwordV) {
        $meteor.resetPassword(Session.get('resetPassword'), $scope.password)
        .then(function() {
          Session.set('resetPassword', $stateParams.token);
          Materialize.toast('Password reset successfully. Redirecting.', 3000, 'success-toast');
          $timeout(function() {
            $location.path('/characters');
          }, 3500);
        }, function(err) {
          Materialize.toast('Sorry, there was an error. ' + err.reason + '.' , 3000, 'success-toast');
        });
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
