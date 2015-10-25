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
      $scope.items = $meteor.collection(Items);

      $scope.races = $scope.content['en-us'].races;
      $scope.proficiencies = $scope.content['en-us'].proficiencies;
      $scope.subraces = $scope.content['en-us'].subraces;
      $scope.classes = $scope.content['en-us'].classes;
      $scope.backgrounds = $scope.content['en-us'].backgrounds;
      $scope.alignments = $scope.content['en-us'].alignments;
      $scope.attributes = $scope.content['en-us'].attributes;

      $scope.abilityText = $scope.content['en-us'].pages.create.ability.Default;

      $scope.swapAbilityText = function(ability) {
        $scope.abilityText = $scope.content['en-us'].pages.create.ability[ability];
      };

      $scope.profDisabled = function(name) {
        var total = 0;
        var isName = false;

        _.each($scope.character.proficiencies, function(prof, _name) {
          if (name == _name && prof) { isName = true; }
          if (prof) { total++; }
        });

        return isName ? !isName : total >= 3;
      };

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

      $scope.backup = function() {
        //determine where we are
        var split = $location.$$path.split('/');
        var state = split[split.length -1];
        var toState = $scope.workflow[$scope.workflow.indexOf(state)-1];

        $location.path(basePath + toState);
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

        if (_.isUndefined(locationToGo)) {
          //user has completed all states
          $scope.finalizeCharacter();
        } else {
          $location.path(basePath + locationToGo);
        }
      };

      $scope.finalizeCharacter = function() {
        $scope.character.newCharacter = false;
        delete $scope.character.status;
        $location.path('/character/' + $scope.character._id);
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
