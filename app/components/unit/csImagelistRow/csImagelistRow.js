'use strict';
angular.module('registryUiApp').controller('CsImagelistRowController' ,function($scope){
    $scope.currentTag = $scope.tags[0];
});
angular.module('registryUiApp').directive('csImagelistRow', function(){
  return {
      restrict: 'E',
      scope:  {
        tags: '='
      },
      templateUrl: 'components/unit/csImagelistRow/csImagelistRow.html',
      controller: 'CsImagelistRowController as vm',
  }
});