'use strict';

angular.module('registryUiApp').controller('DashboardController', function($interval, _){
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

});

angular.module('registryUiApp').controller('DashboardStatisticController',function($scope,$interval, _){

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'bar',
                backgroundColor:'#f5f5f5',
            }
        },
        title: {
            text:''
        },
        exporting:{enabled:false},
        xAxis:{
            //categories:[],
            title:{
                text:null
            }
        },
        yAxis: {
            min: 0,
            title: null,//{
                //text: 'Population (millions)',
                //align: 'high'
            //},
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
                name: '命名空间',
                data: [15]
            },
            {
                name: '用户',
                data: [30]
            },
            {
                name: '镜像',
                data: [60]
        }],



       // loading: false
    }


    $interval(function(){

        var namespacesNum=Math.ceil(Math.random()*50)
        var usersNum=Math.ceil(Math.random()*100)
        var imagesNum = Math.ceil(Math.random()*1000);

        $scope.chartConfig.series  =   [{
            name: '命名空间('+namespacesNum+')',
            data: [namespacesNum]
        },
            {
                name: '用户('+usersNum+')',
                data: [usersNum]
            },
            {
                name: '镜像('+imagesNum+')',
                data: [imagesNum]
            }];
    },2000);
});


angular.module('registryUiApp').controller('throughputiopscontroller', function($interval){
    var vm =this;
    //vm.tabIndex='iops';

    vm.tabClick = function(tabName){
        //alert(vm.tabIndex)
        this.tabIndex =tabName;
        this.creatView();
    }

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    vm.creatView = function(){
        if(!this.tabIndex || this.tabIndex == 'iops'){
            $('#throughputiopscontainer').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function() {
                            var series = this.series[0];
                            setInterval(function() {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.random();
                                series.addPoint([x, y], true, true);
                            }, 1000);
                        }
                    }
                },
                title: {
                    text: 'IOps'
                },
                xAxis: {
                    title:{
                        text:'时间'
                    },
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: '使用量'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'IOps',
                    data: (function() { // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i++) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    })()
                }]
            });
        }
        else{
            $('#throughputiopscontainer').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function() {

                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function() {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.random();
                                series.addPoint([x, y], true, true);
                            }, 1000);
                        }
                    }
                },
                title: {
                    text: '吞吐量'
                },
                xAxis: {
                    title:{
                        text:'时间'
                    },
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: '使用量'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '吞吐量',
                    data: (function() { // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i++) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    })()
                }]
            });
        }
    }
    this.creatView();

})
