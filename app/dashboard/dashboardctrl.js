/**
 * Created by liwei on 16-3-16.
 */
'use strict';

var registryApp = angular.module('registryUiApp');

registryApp.controller('DashboardStatisticController',function($scope,$interval, _){

    var vm = this;
    this.imageNum = 100;
    this.namespaceNum = 12;
    this.userNum = 20;

    $interval(function(){

        vm.imageNum=Math.ceil(Math.random()*50)
        vm.namespaceNum=Math.ceil(Math.random()*100)
        vm.userNum = Math.ceil(Math.random()*1000);

    },2000);
});


registryApp.controller('throughputiopscontroller', function($interval){
    var vm =this;
    //vm.tabIndex='iops';

    vm.tabClick = function(tabName){
        //alert(vm.tabIndex)
        this.tabIndex =tabName;
        this.creatView();
    }

    //初始化select数据以及事件
    vm.modle = [
        {name:'eth0',value:'eth0'},
        {name:'eth1',value:'eth1'}
    ];
    vm.selected = "eth0";
    vm.selectedChange = function(){
        //alert(this.selected);
        this.creatView();
    }

    //创建视图
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
                            $interval(function() {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.ceil(Math.random()*100);
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
                    ceiling: 100,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }],
                    minorGridLineWidth: 0,
                    minorTickInterval: 'auto',
                    minorTickLength: 5,
                    minorTickWidth: 1
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
                                y: 0
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
                            $interval(function() {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.ceil(Math.random()*100);
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
                    ceiling: 100,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }],
                    minorGridLineWidth: 0,
                    minorTickInterval: 'auto',
                    minorTickLength: 5,
                    minorTickWidth: 1
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
                                y: 0
                            });
                        }
                        return data;
                    })()
                }]
            });
        }
    }
    //初始化数据
    this.selectedChange();

})
