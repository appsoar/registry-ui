'use strict';

angular.module('registryUiApp').controller('DashboardController', function($scope, $interval, _,LogsService,wsService){
    var vm = this;
    $scope.sysinfo = wsService.collection;
    vm.totalCpu = '100';
    vm.label = ['CPU', '内存', '磁盘'];
    // $interval(function(){
    //         //常规配置
    //         console.log($scope.sysinfo);
    // },1000);
    LogsService.query().$promise.then(function(value, responseHeaders){
        vm.logs = value;
        console.log(vm.logs);
    },function(httpResponse){});
});
