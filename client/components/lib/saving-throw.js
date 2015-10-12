(function() {
  "use strict";

  var app = angular
    .module("saving-throw",
    ['angular-meteor',
      'ui.router'])
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
              controller: 'loginCtrl'
            })
            .state('register', {
              url: '/register',
              templateUrl: baseUrl + 'register/index.ng.html',
              controller: 'registerCtrl'
            });

          $urlRouterProvider.otherwise("/");

          $locationProvider.html5Mode(true);

        }
      ]);
}());
