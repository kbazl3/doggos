angular.module("dogs", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('home', {
              url: "/",
              templateUrl: 'home.html',
              controller: 'mainCtrl'
              });
      });
