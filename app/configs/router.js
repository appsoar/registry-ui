'use strict'

angular.module('registryUiApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '/',
    templateUrl: 'home/main.html',
    controller: 'MainCtrl as main',
  });

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'home/main.html',
    controller: 'MainCtrl as main',
  });

  $stateProvider.state('home.dashboard', {
    url: '/dashboard',
    template: '<div ui-view>dashboard</div>',
    abstract: false
  });

  $stateProvider.state('home.repositories', {
    url: '/repositories',
    template: '<div ui-view>repositories</div>',
    abstract: false
  });

  $stateProvider.state('home.namespaces', {
    url: '/namespaces',
    template: '<div ui-view>namespaces</div>',
    abstract: false
  });

  $stateProvider.state('home.settings', {
    url: '/settings',
    template: '<div ui-view>settings</div>',
    abstract: false
  });

  $stateProvider.state('home.settings.accounts', {
    url: '/accounts',
    templateUrl: '/settings/accounts/account.html',
    controller: 'AccountController as account'
  });

  $stateProvider.state('home.logs', {
    url: '/logs',
    template: '<div ui-view>logs</div>',
    abstract: false
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController as login',
  });

  // $urlRouterProvider.otherwise('/login');
});
