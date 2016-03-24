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

   $stateProvider.state('home.images', {
     url: '/images',
     template: '<div ui-view></div>',
     abstract: true
   });

  //temp code ,for test proxy
 // $stateProvider.state('home.images.image', {
 //    url: '/images',
 //    template: '<div ui-view></div>',
 //    abstract: true
 //  });

  $stateProvider.state('home.images.imagelist', {
    url: '/list',
    templateUrl: '/images/imagelist/images.html',
    controller: 'ImagelistController as vm'
  });

  $stateProvider.state('home.images.detail', {
    url: '/:namespace/:reponame/:tag',
    templateUrl: '/images/imagelist/detail/detail.html',
    controller: "ImageDetailController as vm"
  });

 $stateProvider.state('home.images.namespace', {
        url: '/namespace',
         template: '<div ui-view></div>',
         abstract: true
    })
     .state('home.images.namespace.list', {
         url: '/list',
         templateUrl: '/images/namespace/namespace.html',
         controller: 'namespaceCtrl'
     })
     .state('home.images.namespace.view', {
         url: '/view?_id',
         templateUrl: '/images/namespace/namespaceview.html',
         controller: 'namespaceViewCtrl as vm'
     })
     .state('home.images.namespace.add', {
         url: '/add',
         templateUrl: '/images/namespace/namespaceedit.html',
         controller: 'namespaceEditCtrl as vm'
     })
     .state('home.images.namespace.edit', {
         url: '/edit?_id',
         templateUrl: '/images/namespace/namespaceedit.html',
         controller: 'namespaceEditCtrl as vm'
     });



  $stateProvider.state('home.users', {
    url: '/users',
    template: '<div ui-view></div>',
    abstract: true
  });

  $stateProvider.state('home.settings', {
    url: '/settings',
    // template: '<layout-setting-header></layout-setting-header>',
    template: '<div ui-view></div>',
    abstract: true
  });

  $stateProvider.state('home.settings.general', {
    url: '/general',
    templateUrl: '/settings/general/general.html',
    controller: 'GeneralController as vm'
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

  $stateProvider.state('home.settings.storage', {
    url: '/storage',
    templateUrl: '/settings/storage/storage.html',
    controller: 'StorageController as vm'
  });

  $stateProvider.state('home.settings.logs', {
    url: '/logs',
    templateUrl: '/settings/logs/logs.html',
    controller: 'LogsController as vm'
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController as vm'
  });

  $urlRouterProvider.otherwise('/dashboard');
});
