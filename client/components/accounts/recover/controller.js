(function() {
  'use strict';

  angular.module("saving-throw")
    .controller("recoverCtrl", ["$scope",
      "$location",
      "$meteor",
      "$timeout",
      recoverCtrl
    ]);

  function recoverCtrl($scope, $location, $meteor, $timeout) {

    $scope.toRegister = function() {
      $location.path('/register');
    };

    $scope.doRecover = function() {
      if ($scope.email) {
        $meteor.forgotPassword( { email : $scope.email })
        .then(function() {
          Materialize.toast('Reset email has been sent.', 3000, 'success-toast');
        }, function(err) {
          Materialize.toast('An error occured. ' + err.reason + '.', 3000, 'failure-toast');
        });
      } else {
        Materialize.toast('Please provide an email.', 3000, 'failure-toast');
      }
    };

  }
})();
