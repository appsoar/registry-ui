'use strict';

angular.module('registryUiApp').controller('LayoutHeaderController', function LayoutHeaderController($scope, $location, $state, _, Repository, LogoutService) {
  var vm = this;
  // vm.currentUser = currentUser.username;
  $scope.$on('$stateChangeSuccess', function() {
        $scope.path = $location.path().split('/');
  });
  $scope.path = $location.path().split('/');
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

  vm.logout = function(){
      LogoutService.logout({}, {} ,function() {
            sessionStorage.currentUser = '';
            $state.go('login');
          },function(){
            // toastr.error('no.', 'username or password error');
      });   
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
