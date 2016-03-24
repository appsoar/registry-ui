'use strict';

angular.module('registryUiApp').controller('DashboardController', function($scope, $interval, _,LogsService,wsService){
    var vm = this;
    $scope.sysinfo = wsService.collection;
    vm.totalCpu = '100';
    vm.label = ['CPU', '内存', '磁盘'];
    LogsService.query({num: 7}).$promise.then(function(value, responseHeaders){
        vm.logs = value;
    },function(httpResponse){});
});
