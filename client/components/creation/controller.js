(function () {
    'use strict';

    angular.module("saving-throw")
            .controller("createCtrl",
              ["$scope",
               "$location",
               "$meteor",
               "$stateParams",
               "$rootScope",
                createCtrl]);

    function createCtrl($scope, $location, $meteor, $stateParams, $rootScope) {
      $scope.workflow = ['race', 'class', 'background', 'details', 'ability', 'equipment', 'spells', 'misc'];

      $scope.races = ['Dwarf', 'Elf', 'Halfing', 'Human', 'Dragonborn', 'Gnome', 'Half-elf', 'Orc', 'Tiefling', 'Aasimar [DMG]', 'Aarakocra [EE]', 'Genasi [EE]', 'Goliath [EE]',
                      'Changeling [UA]', 'Shifter [UA]', 'Warforged [UA]', 'Minotaur [UA]'];

      $scope.proficiencies = [ 'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Survival', 'Stealth'];

      $scope.subraces = {
        'Dwarf': ['Hill', 'Mountain'],
        'Elf': ['High', 'Wood', 'Drow', 'Eladrin [DMG]'],
        'Halfling': ['Lightfoot', 'Stout'],
        'Human': ['Standard', 'Variant'],
        'Gnome': ['Forest', 'Rock', 'Deep [EE]'],
        'Genasi [EE]': ['Air', 'Earth', 'Fire', 'Water'],
        'Shifter [UA]': ['Beasthide', 'Cliffwalk', 'Longtooth', 'Razorclaw', 'Wildhunt']
      };

      $scope.classes = [
        'Barbarian',
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Monk',
        'Paladin',
        'Ranger',
        'Rogue',
        'Sorcerer',
        'Warlock',
        'Wizard'
      ];

      $scope.backgrounds = [
        'Acolyte',
        'Charlatan',
        'Criminal',
        'Spy',
        'Entertainer',
        'Gladiator',
        'Folk Hero',
        'Guild Artisan',
        'Guild Merchant',
        'Hermit',
        'Noble',
        'Knight',
        'Outlander',
        'Sage',
        'Sailor',
        'Pirate',
        'Soldier',
        'Urchin'

      ];

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
        } else {
          //edgecase someone selected a subrace, then changed to a class w/o subraces
          delete char.subrace;
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
