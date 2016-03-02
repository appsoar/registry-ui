'use strict';

/**
 * @ngdoc overview
 * @name registryUiApp
 * @description
 * # registryUiApp
 *
 * Main module of the application.
 */
angular
  .module('registryUiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);
  // .config(['$routeProvider', '$locationProvider',
  //     function($routeProvider, $locationProvider){

  //    // $locationProvider.html5Mode(true);
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })     
  //    .when('/login', {
  //       templateUrl: 'login/login.html',
  //       controller: 'LoginController',
  //       controllerAs: 'login'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // }]);
