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
            });

          $urlRouterProvider.otherwise("/");

          $locationProvider.html5Mode(true);

        }
      ]);
}());
