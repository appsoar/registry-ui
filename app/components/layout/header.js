'use strict';

angular.module('registryUiApp').controller('LayoutHeaderController', function LayoutHeaderController(_, Repository) {
  var vm = this;
  vm.keyword = '';
  vm.repositories = [];
  var search = function(){
    if(vm.keyword){
      //get data from backend
      vm.repositories = Repository.query({});
      console.log(vm.keyword);
    }
  }
  vm.search = _.debounce(search, 300);
});

angular.module('registryUiApp').directive('layoutHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/header.html',
    controller: 'LayoutHeaderController as vm'
  };
});
