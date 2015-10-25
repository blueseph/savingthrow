(function() {
  "use strict";

  var app = angular
    .module("saving-throw", ['angular-meteor',
      'ui.materialize',
      'ui.router',
      'ui.router',
      "ngSanitize",
    ])
    .config(
      ["$urlRouterProvider",
        "$stateProvider",
        "$locationProvider",
        function($urlRouterProvider, $stateProvider, $locationProvider) {

          var baseUrl = "client/components/";

          $stateProvider

          //homepage

            .state('home', {
              url: '/',
              templateUrl: baseUrl + 'home/index.ng.html',
              controller: 'indexCtrl'
            })
            .state('privacy', {
              url: '/privacy',
              templateUrl: baseUrl + 'privacy/index.ng.html',
            })
            .state('terms', {
              url: '/terms',
              templateUrl: baseUrl + 'terms/index.ng.html',
            })

          //login
          .state('login', {
              url: '/login',
              templateUrl: baseUrl + 'login/index.ng.html',
              controller: 'loginCtrl',
            })
            .state('register', {
              url: '/register',
              templateUrl: baseUrl + 'register/index.ng.html',
              controller: 'registerCtrl',
            })

          //logged in
          .state('characters', {
            url: '/characters',
            templateUrl: baseUrl + 'characters/index.ng.html',
            controller: 'charCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('characterDetail', {
            url: '/character/:id',
            templateUrl: baseUrl + 'characters/index.ng.html',
            controller: 'charCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          //character creation
          .state('create', {
            url:'/create/:id',
            templateUrl: baseUrl + 'creation/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/race', {
            url:'/create/:id/race',
            templateUrl: baseUrl + 'creation/race/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/class', {
            url:'/create/:id/class',
            templateUrl: baseUrl + 'creation/class/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/details', {
            url:'/create/:id/details',
            templateUrl: baseUrl + 'creation/details/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/ability', {
            url:'/create/:id/ability',
            templateUrl: baseUrl + 'creation/ability/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/background', {
            url:'/create/:id/background',
            templateUrl: baseUrl + 'creation/background/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/equipment', {
            url:'/create/:id/equipment',
            templateUrl: baseUrl + 'creation/equipment/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/spells', {
            url:'/create/:id/spells',
            templateUrl: baseUrl + 'creation/spells/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          })

          .state('create/misc', {
            url:'/create/:id/misc',
            templateUrl: baseUrl + 'creation/misc/index.ng.html',
            controller: 'createCtrl',
            resolve: {
              "currentUser": ["$meteor", function($meteor) {
                return $meteor.requireUser();
              }]
            }
          });

          $urlRouterProvider.otherwise("/");

          $locationProvider.html5Mode(true);

        }
      ]);

  angular.module("saving-throw").run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireUser promise is rejected
      // and redirect the user back to the main page
      switch (error) {
        case "AUTH_REQUIRED":
          $state.go('home');
          break;
        default:
          $state.go('internal-server-error');
      }
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      //if a user is logged in and visiting non-logged in states, redirect them to characters.
      if (toState.name == 'login' || toState.name == 'register' || toState.name == 'home')
      {
        if (event && event.targetScope && event.targetScope.currentUser)
        {
          event.preventDefault();
          $state.go('characters');
        }
      }
    });


  }]);
}());
