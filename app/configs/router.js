'use strict';

angular.module('registryUiApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  //remove # from url
  $locationProvider.html5Mode(true);

  $stateProvider.state('default', {
    url: '/',
    // templateUrl: 'home/main.html',
    template: '<app-layout></app-layout>',
    // controller: 'HomeController as main',
    abstract: true
  });

  $stateProvider.state('home', {
    url: '',
    // templateUrl: 'home/main.html',
    template: '<app-layout></app-layout>',
    // controller: 'HomeController as main',
    abstract: true
  });

  $stateProvider.state('home.dashboard', {
    url: '/dashboard',
    templateUrl: '/dashboard/dashboard.html',
    controller: 'DashboardController as vm'
  });

  // $stateProvider.state('home.repositories', {
  //   url: '/repositories',
  //   template: '<div ui-view></div>',
  //   abstract: false
  // });

  //temp code ,for test proxy
 $stateProvider.state('home.repositories', {
    url: '/repositories',
    templateUrl: '/repositories/repository-list.html',
    controller: 'RepositoryListController as vm'
  });

  $stateProvider.state('home.namespaces', {
    url: '/namespaces',
    template: '<div ui-view></div>',
    abstract: true
  });

  $stateProvider.state('home.settings', {
    url: '/settings',
    template: '<layout-setting-header></layout-setting-header>',
    abstract: true
  });

  $stateProvider.state('home.settings.upgrade', {
    url: '/upgrade',
    templateUrl: '/settings/upgrade/upgrade.html',
    controller: 'UpgradeController as vm'
  });

$stateProvider.state('home.settings.license', {
    url: '/license',
    templateUrl: '/settings/license/license.html',
    controller: 'LicenseController as vm'
  });

  $stateProvider.state('home.settings.accounts', {
    url: '/accounts',
    templateUrl: '/settings/accounts/account.html',
    controller: 'AccountController as vm'
  });

  $stateProvider.state('home.logs', {
    url: '/logs',
    templateUrl: 'logs/logs.html',
    controller: 'LogsController as vm'
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController as vm'
  });

  $urlRouterProvider.otherwise('/dashboard');
});
