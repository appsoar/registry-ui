'use strict';

angular.module('registryUiApp').controller('CsSysinfoChartController' ,function($scope, $interval){
    $interval(function(){
        $scope.style = {width: $scope.data.percent + '%', backgroundColor: $scope.data.percent > 60 ? 'red' : 'green'};
    },500);
});
angular.module('registryUiApp').directive('csSysinfoChart', function(){
  return {
      restrict: 'E',
      scope:  {
        label: '=',
        data: '=',
      },
      templateUrl: 'components/unit/csSysinfoChart/csSysinfoChart.html',
      controller: 'CsSysinfoChartController',
  }
});