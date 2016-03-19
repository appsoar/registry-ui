'use strict';

angular.module('registryUiApp').controller('CsSortableThController' ,function($scope){
    $scope.onResort = function(){
        if($scope.current.label === $scope.label){
            $scope.current.desc = !$scope.current.desc;
        }else{
            $scope.current.label = $scope.label;
            $scope.current.desc = true;
        }
        $scope.changeResort();
    }
});
angular.module('registryUiApp').directive('csSortableTh', function(){
  return {
      restrict: 'E',
      scope:  {
        label: '=',
        current: '=',
        changeResort: '&'
      },
      templateUrl: 'components/unit/csSortableTh/csSortableTh.html',
      controller: 'CsSortableThController',
  }
});