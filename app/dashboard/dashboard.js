'use strict';

angular.module('registryUiApp').controller('DashboardController', function($interval, _,LogsService,wsService){
    var vm = this;
    // vm.sysinfo = wsService;

    //常规配置
    vm.data = [{
            percent:0,
            total:100
    },{
            percent:0,
            total:100
    },{
            percent:0,
            total:100
    }];
    vm.label = ['CPU', '内存', '磁盘'];
    $interval(function(){
        vm.data[0].percent  =   Math.ceil(Math.random()*100);
    },1000);
    $interval(function(){
        vm.data[1].percent  =   Math.ceil(Math.random()*100);
    },1000);
    $interval(function(){
        vm.data[2].percent  =   Math.ceil(Math.random()*100);
    },1000);
    LogsService.query().$promise.then(function(value, responseHeaders){
        vm.logs = value;
    },function(httpResponse){});
});
