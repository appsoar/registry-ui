'use strict';

angular.module('registryUiApp').controller('DashboardController', function(wsService){
    var vm = this;
    vm.sysinfo = wsService;

});