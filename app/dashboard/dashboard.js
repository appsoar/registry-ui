'use strict';

angular.module('registryUiApp').controller('DashboardController', function($interval){
    var vm = this;
    // vm.sysinfo = wsService;
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
    vm.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };

    // $interval(function(){
    //   var temp = [];
    //   for(var n=0; n<6; n++){
    //       temp[0,n] = vm.data[0,n+1];
    //       temp[1,n] = vm.data[1,n+1];
    //   }
    //   temp[0,6] =   Math.ceil(Math.random()*100);
    //   temp[1,6] =   Math.ceil(Math.random()*100);
    //   vm.data = temp;
    // },3000);
    $interval(function(){
      vm.percent  =   Math.ceil(Math.random()*100);
    },1000);
});