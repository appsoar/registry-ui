/**
 * Created by liwei on 16-3-16.
 */
'use strict';

var registryApp = angular.module('registryUiApp');

registryApp.controller('DashboardStatisticController', function ($scope, $interval, _) {

    var vm = this;
    this.imageNum = 100;
    this.namespaceNum = 12;
    this.userNum = 20;

    $interval(function () {

        vm.imageNum = Math.ceil(Math.random() * 50)
        vm.namespaceNum = Math.ceil(Math.random() * 100)
        vm.userNum = Math.ceil(Math.random() * 1000);

    }, 2000);
});


registryApp.controller('iopsController', function ($scope, $interval,iopsListService,iopsService) {
    var vm = this;
    //vm.tabIndex='iops';


    vm.tabClick = function (tabName) {
        //alert(vm.tabIndex)
        this.tabIndex = tabName;
        this.creatView();
    }

    //初始化select数据以及事件
    vm.modle=[];
    iopsListService.query(function (data) {
        vm.selected=data[0];
       // var result = [];
        angular.forEach(data, function(item){
            vm.modle.push({name:item,value:item});
        });
        //初始化数据
        vm.selectedChange();
    });


    vm.selectedChange = function () {
        vm.TxBytes=0;
        vm.RxBytes = 0;
        $("div").remove("#throughputiops div");
        $("#throughputiops").prepend("<div id='throughputiopscontainer'></div>");
        this.creatView();
    }

    vm.TxRx = "TxBytes";
    vm.TxRxModle = [
        {name:"发送数据包",value:"TxBytes"},{name:"接收数据包",value:"RxBytes"}
    ];
    vm.selectedChangeTxRx = function() {
        vm.selectedChange();
    }

    //创建视图
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    vm.TxBytes=0;
    vm.RxBytes = 0;
    vm.iposSearch = function(){
        var txBytes=iopsService.query({netifs: vm.selected},function (data) {
            //console.log(data);
            var temp = angular.fromJson(data);
                vm.TxBytes = temp.TxBytes;
                vm.RxBytes = temp.RxBytes;
        });
    };


    vm.creatView = function () {
        if( vm.TxRx == "TxBytes"){
            $('#throughputiopscontainer').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var series = this.series[0];
                        $interval(function () {
                            vm.iposSearch();
                            var x = (new Date()).getTime(), // current time
                            y = Math.ceil(vm.TxBytes) =="undefined"? 0:Math.ceil(vm.TxBytes);
                            series.addPoint([x, y], true, true);
                        }, 3000);
                    }
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                title: {
                    text: '时间'
                },
                type: 'datetime',
                //tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'TxBytes'
                },
                //ceiling: 100,
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
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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
                name: 'TxBytes',
                data: (function () {
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -9; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: vm.TxBytes
                        });
                    }
                    return data;
                })()
            }]
        });
        }
        else {
            $('#throughputiopscontainer').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function () {
                            var series = this.series[0];
                            $interval(function () {
                                vm.iposSearch();
                                var x = (new Date()).getTime(), // current time
                                    y = Math.ceil(vm.RxBytes) =="undefined"? 0:Math.ceil(vm.RxBytes);
                                series.addPoint([x, y], true, true);
                            }, 3000);
                        }
                    }
                },
                title: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: '时间'
                    },
                    type: 'datetime',
                    //tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'RxBytes'
                    },
                    //ceiling: 100,
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
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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
                    name: 'RxBytes',
                    data: (function () {
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -9; i <= 0; i++) {
                            data.push({
                                x: time + i * 1000,
                                y: vm.RxBytes
                            });
                        }
                        return data;
                    })()
                }]
            });
        }
    };
})
