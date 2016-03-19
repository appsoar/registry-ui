'use strict';

angular.module('registryUiApp').controller('CsLatestLogsController' ,function($scope){

});
angular.module('registryUiApp').directive('csLatestLogs', function(){
  return {
      restrict: 'E',
      scope:  {
        logs: '=',
      },
      templateUrl: 'components/unit/csLatestLogs/csLatestLogs.html',
      controller: 'CsLatestLogsController',
  }
});