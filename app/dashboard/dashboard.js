'use strict';

angular.module('registryUiApp').controller('DashboardController', function($interval, _, LogsService, wsService){
    var vm = this;
    vm.sysinfo = wsService;
    vm.percent = 0;
    //常规配置
    vm.options = [
        {
          trackColor:'#888', 
          barColor:'#50a3a2', 
          scaleColor:false,
          lineWidth:10 ,
          lineCap:'round' ,
          size: 120
        },
        {
          trackColor:'#888', 
          barColor:'#50a3a2', 
          scaleColor:false,
          lineWidth:10 ,
          lineCap:'round' ,
          size: 120
        },
        {
          trackColor:'#888', 
          barColor:'#50a3a2', 
          scaleColor:false,
          lineWidth:10 ,
          lineCap:'round' ,
          size: 120
        }
    ];

    vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
    vm.series = ['Series A', 'Series B'];
    vm.data =  [[65, 59, 80, 81, 56, 55, 40]];
    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };
    vm.lineOptions = {
        animation: false,
        bezierCurve : true,
    }
    $interval(function(){
      // var temp =vm.data.concat();
      var temp = _.drop(vm.data[0]);
       temp[6] =   Math.ceil(Math.random()*100);
      // vm.data = temp.concat();
      vm.data[0] = temp;
      // console.log(temp);
      // console.log(vm.data[0]);
    },2000);
    $interval(function(){
      vm.percent  =   Math.ceil(Math.random()*100);
    },1000);

    LogsService.query().$promise.then(function(value, responseHeaders){
      vm.logs = value;
    },function(httpResponse){});
});