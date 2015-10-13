(function() {
  "use strict";

  var app = angular
    .module("saving-throw", ['angular-meteor',
      'ui.router'
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
          .state('lobby', {
            url: '/lobby',
            templateUrl: baseUrl + 'lobby/index.ng.html',
            controller: 'lobbyCtrl',
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
      console.log(error);
      switch (error) {
        case "AUTH_REQUIRED":
          $state.go('home');
          break;
        default:
          $state.go('internal-server-error');
      }
    });
  }]);
}());
