'use strict'

angular.module('registryUiApp').controller('LoadingController', function ($scope) {
  var vm = this;
  vm.rel = 0;
  $scope.$on('loading.begin', function(event) {
      //console.log(event.name);
  });

  $scope.$on('loading.end', function(event) {
      //console.log(event.name);
  });

  $scope.$on('loading.level', function(event, rel) {
      //console.log(event.name);
      //console.log(rel);
      vm.rel = rel;
  });
});

angular.module('registryUiApp').directive('loadingXhr', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'components/layout/loading.html',
    controller: 'LoadingController as vm'
  };
});
