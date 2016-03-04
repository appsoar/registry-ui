'use strict'

angular.module('registryUiApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '/',
    // templateUrl: 'home/main.html',
    template: '<app-layout></app-layout>',
    controller: 'HomeController as main',
  });

  $stateProvider.state('home', {
    url: '',
    // templateUrl: 'home/main.html',
    template: '<app-layout></app-layout>',
    controller: 'HomeController as main',
  });

  $stateProvider.state('home.dashboard', {
    url: '/dashboard',
    template: '<div ui-view></div>',
    abstract: false
  });

  $stateProvider.state('home.repositories', {
    url: '/repositories',
    template: '<div ui-view></div>',
    abstract: false
  });

  $stateProvider.state('home.namespaces', {
    url: '/namespaces',
    template: '<div ui-view></div>',
    abstract: false
  });

  $stateProvider.state('home.settings', {
    url: '/settings',
    template: '<div ui-view></div>',
    abstract: false
  });

  $stateProvider.state('home.settings.accounts', {
    url: '/accounts',
    templateUrl: '/settings/accounts/account.html',
    controller: 'AccountController as account'
  });

  $stateProvider.state('home.logs', {
    url: '/logs',
    template: '<div ui-view></div>',
    abstract: false
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController as login',
  });

  $urlRouterProvider.otherwise('/login');
});
