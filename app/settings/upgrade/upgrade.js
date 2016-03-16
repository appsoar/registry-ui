'use strict';

angular.module('registryUiApp').controller('UpgradeController', function(UpgradeService){
  var vm = this;
  vm.hasNew = false;
  vm.noNew = false;
  // UpgradeService.query({},function(value, responseHeaders){
  //   console.log(value);
  // }, function(httpResponse){});
  UpgradeService.query().$promise.then(function(value, responseHeaders){
    console.log(value);
    vm.version = value; 
    vm.hasNew = vm.version.upgradeAvailable;
    vm.noNew = !vm.hasNew;
  }, function(httpResponse){});
});