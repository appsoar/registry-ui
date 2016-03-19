'use strict';

angular.module('registryUiApp').controller('LayoutHeaderController', function LayoutHeaderController($scope, $location, $state, _, Repository) {
  var vm = this;
  // vm.currentUser = currentUser.username;
  $scope.$on('$stateChangeSuccess', function() {
        $scope.path = $location.path().split('/')[1];
  });
  $scope.path = $location.path().split('/')[1];
  var detectLogin = function(){
      vm.currentUser = sessionStorage.currentUser;
      if(!vm.currentUser){
          $state.go('login');
      }  
  }
  detectLogin();
  console.log(vm.currentUser);
  vm.keyword = '';
  // vm.repositories = Repository.query({});
  vm.stay = false;
  var search = function(){
    if(vm.keyword){
      //get data from backend 
      // vm.repositories = Repository.query({});
      console.log(vm.keyword);
    }
  };
  vm.search = _.debounce(search, 300);
  vm.blur = function(){
    vm.stay = false;
  };
  vm.focus = function(){
    vm.stay = true;
  }
});

angular.module('registryUiApp').directive('layoutHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/header.html',
    controller: 'LayoutHeaderController as vm'
  };
});
