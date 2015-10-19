(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("createCtrl",
              ["$scope",
               "$location",
               "$meteor",
               "$stateParams",
               "$rootScope",
               "$sce",
                createCtrl]);

    function createCtrl($scope, $location, $meteor, $stateParams, $rootScope, $sce) {
      $scope.workflow = ['race', 'class', 'background', 'details', 'ability', 'equipment', 'spells', 'misc'];
      $scope.content = $meteor.collection(Content)[0];

      $scope.races = $scope.content['en-us'].races;

      $scope.proficiencies = $scope.content['en-us'].proficiencies;

      $scope.subraces = $scope.content['en-us'].subraces;

      $scope.classes = $scope.content['en-us'].classes;

      $scope.backgrounds = $scope.content['en-us'].backgrounds;

      $scope.removeSubrace = function() {
          delete $scope.character.subrace;
      };

      $scope.hasSubrace = function(race) {
        return !_.isUndefined($scope.subraces[race]);
      };

      $scope.finishedState = function(state) {
        var char = $scope.character;
        var toState = $scope.workflow[$scope.workflow.indexOf(state)+1];

        char.status = char.status || [];
        char.status.push(state);
        $location.path(basePath + toState);
      };

      $scope.selectedRace = function() {
        //change to let error in es6
        var error = false;
        var char = $scope.character;
        if ($scope.hasSubrace(char.race)) {
          if (_.isUndefined(char.subrace)) {
            Materialize.toast('Please select a subrace', 4000, 'failure-toast');
            error = true;
          }
        }

        if (!error) {
          $scope.finishedState('race');
        }
      };


      $scope.toState = function(state) {
        var char = $scope.character;

        $location.path(basePath + state);
      };

      $scope.determineState = function(character) {
        var locationToGo;

        _.each($scope.workflow, function(state) {
          if (!_.contains(character.status, state) && _.isUndefined(locationToGo)) { locationToGo = state; }
        });

        $location.path(basePath + locationToGo);
      };

      $scope.characters = $meteor.collection(Characters).subscribe('characters');

      if ($stateParams.id !== 'undefined') {
        $scope.character = $meteor.object(Characters, $stateParams.id).subscribe('characters');
        var basePath = '/create/' + $scope.character._id + '/';

        var split = $location.$$path.split('/');
        if (split[split.length - 1] == $scope.character._id) {
          $scope.determineState($scope.character);
        }
      } else {
        $location.path('/characters');
      }

    }
})();
