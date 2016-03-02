'use strict'

angular.module('registryUiApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'home/main.html',
    controller: 'MainCtrl as main',
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home/main.html',
    controller: 'MainCtrl as main',
  });

  $stateProvider.state('home.dashboard', {
    url: '/dashboard',
    template: '<div ui-view>dashboard</div>',
    abstract: true
  });

  $stateProvider.state('home.repositories', {
    url: '/repositories',
    template: '<div ui-view>repositories</div>',
    abstract: true
  });

  $stateProvider.state('home.namespaces', {
    url: '/namespaces',
    template: '<div ui-view>namespaces</div>',
    abstract: true
  });

  $stateProvider.state('home.settings', {
    url: '/settings',
    template: '<div ui-view>settings</div>',
    abstract: true
  });

  $stateProvider.state('home.settings.accounts', {
    url: '/accounts',
    templateUrl: '/settings/accounts/account.html',
    controller: '/settings/accounts/account.js as account'
  });

  $stateProvider.state('home.logs', {
    url: '/logs',
    template: '<div ui-view>logs</div>',
    abstract: true
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController as login',
  });

  // $urlRouterProvider.otherwise('/login');
});
