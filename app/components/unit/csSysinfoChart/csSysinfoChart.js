'use strict';

angular.module('registryUiApp').controller('CsSysinfoChartController' ,function($scope, $interval){
    $scope.usage = 0;
    $interval(function(){
        try{
            if($scope.label == 'CPU'){
                $scope.usage = $scope.data;
                $scope.style = {width: $scope.data + '%', backgroundColor: $scope.data > 80 ? 'red' : 'green'};
            }else{
                $scope.usage = $scope.total - $scope.data;
                var percent = 100 -  ($scope.data / $scope.total) * 100;
                $scope.style = {width: percent+ '%', backgroundColor: percent > 80 ? 'red' : 'green'};
            }
        }catch(e){
            $scope.style = {width: 0+ '%', backgroundColor: 'green'};
        }
    },1000);
});
angular.module('registryUiApp').directive('csSysinfoChart', function(){
  return {
      restrict: 'E',
      scope:  {
        label: '=',
        data: '=',
        total: '='
      },
      templateUrl: 'components/unit/csSysinfoChart/csSysinfoChart.html',
      controller: 'CsSysinfoChartController'
  }
}).filter('sysInfo', function(){
    return function(input){
       var out= 0;
       if(isNaN(input)){
          return out;
       }
       var gb = 1024;
       var tb = gb * 1024;
       if (input >= tb) {
            out = (input/tb).toFixed(1) + 'T';
       } else if (input >= gb) {
            out= (input / gb).toFixed(1) + 'G';
       } else {
            out = input + 'M';
      }
      return out;
    }
});