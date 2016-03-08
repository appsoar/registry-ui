'use strict';

angular.module('registryUiApp').controller('LogsController', function( LogsService){
    var vm = this;
    LogsService.query().$promise.then(function(value, responseHeaders){
      vm.logs = value;
    },function(httpResponse){});
})