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
               "characterService",
               "backgroundService",
                createCtrl]);

    function createCtrl($scope, $location, $meteor, $stateParams, $rootScope,
                        $sce, characterService, backgroundService) {
      $scope.workflow = ['race', 'class', 'background', 'details', 'ability', 'equipment', 'spells', 'misc'];
      $scope.content = $meteor.collection(Content)[0];
      $scope.backgroundsActual =

      $scope.races = $scope.content['en-us'].races;
      $scope.proficiencies = $scope.content['en-us'].proficiencies;
      $scope.subraces = $scope.content['en-us'].subraces;
      $scope.classes = $scope.content['en-us'].classes;
      $scope.backgrounds = $scope.content['en-us'].backgrounds;
      $scope.alignments = $scope.content['en-us'].alignments;
      $scope.attributes = $scope.content['en-us'].attributes;

      $scope.abilityText = $scope.content['en-us'].pages.create.ability.Default;

      $scope.finalizeCharacter = function() {
        $scope.character.newCharacter = false;
        delete $scope.character.status;
        $location.path('/character/' + $scope.character._id);
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

      $scope.$watch("character.background", function() {
        if (!_.isNull($scope.character.background) && !_.isUndefined($scope.character.background)) {
          backgroundService.applyBackground($scope.character.background, $scope.character);
        }
      });

      $scope.swapAbilityText = function(ability) {
        $scope.abilityText = $scope.content['en-us'].pages.create.ability[ability];
      };

      $scope.profDisabled = function(name) {
        var total = 0;
        var isName = false;

        if (!_.isUndefined($scope.character) && !_.isUndefined($scope.character.base)) {
          _.each($scope.character.base.proficiencies, function(prof, _name) {
            if (name == _name && prof) { isName = true; }
            if (prof) { total++; }
          });
        }

        return isName ? !isName : total >= 3;
      };

      $scope.hasSubrace = function(race) {
        return !_.isUndefined($scope.subraces[race]);
      };

      $scope.finishedState = function(state) {
        var char = $scope.character;
        var error = $scope.validateState(state);

        if (error.hasError) {
          if (error.errorMsg !== '') {
            Materialize.toast(error.errorMsg, 4000, error.errorType + '-toast');
          }
        } else {
          var toState = $scope.workflow[$scope.workflow.indexOf(state)+1];

          char.status = char.status || [];
          char.status.push(state);
          $location.path(basePath + toState);
        }
      };

      $scope.validateState = function(state) {
        var char = $scope.character;
        var error = {
          hasError: false,
          errorType: 'failure',
          errorMsg: ''
        };

        switch (state) {
          case 'race':
            if (_.isUndefined(char.race)) {
              error.hasError = true;
              error.errorMsg = 'Please select a race';
            }

            if (!_.isUndefined(char.race) && $scope.hasSubrace(char.race)) {
              if (_.isUndefined(char.subrace)) {
                error.hasError = true;
                error.errorMsg = 'Please select a subrace';
              }
            }

            break;

          case 'class':
            if (_.isUndefined(char.class)) {
              error.hasError = true;
              error.errorMsg = 'Please select a class';
            }

            if (char.class)
            {
              var count = 0;

              _.each($scope.character.base.proficiencies, function(prof, _name) {
                if (prof) { count++; }
              });

              if (count < 3) {
                error.hasError = true;
                error.errorType = 'info';
                error.errorMsg = 'You can select up to three proficiencies';
              } else {
                if (!char.base.savingthrow) {
                  error.hasError = true;
                  error.errorMsg = 'Please select a saving throw';
                }
              }
            }
            break;

          case 'background':
            if (_.isUndefined(char.background)) {
              error.hasError = true;
              error.errorMsg = 'Please select a background';
            }
            break;

          case 'details':

            if (_.isUndefined(char.alignment)) {
              error.hasError = true;
              error.errorMsg = 'Please select an alignment';
            }

            if  (_.isUndefined(char.name) ||
                 _.isUndefined(char.age) ||
                 _.isUndefined(char.sex) ||
                 _.isUndefined(char.height) ||
                 _.isUndefined(char.weight)) {
                   error.hasError = true;
                   error.errorMsg = 'Please fill out these details';
                 }
            break;

          case 'ability':
          if  (_.isUndefined(char.base.stats.strength) ||
               _.isUndefined(char.base.stats.dexterity) ||
               _.isUndefined(char.base.stats.constitution) ||
               _.isUndefined(char.base.stats.intelligence) ||
               _.isUndefined(char.base.stats.wisdom) ||
               _.isUndefined(char.base.stats.charisma) ) {
                 error.hasError = true;
                 error.errorMsg = 'Please fill out these details';
               }

        }

        return error;
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

    }
})();
