'use strict';

angular.module('registryUiApp').controller('LogsController', function( LogsService){
    var vm = this;
    LogsService.query({num:30}).$promise.then(function(value, responseHeaders){
      vm.logs = value;
    },function(httpResponse){});

    //初始化日期
  vm.today = function() {
    vm.calendarStart = new Date();
    vm.calendarEnd = new Date();
  };
  // vm.today();

  //清除当前日期
  vm.clear = function() {
    vm.calendarStart = null;
    vm.calendarStart = null;
  };


  // 不允许选择周末
  vm.disabled = function(date, mode) {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  };

  //最小日期开关
  vm.toggleMin = function() {
    vm.minDate = vm.minDate ? null : new Date();
  };
  vm.toggleMin();

  vm.toggleMax = function() {
    vm.maxDate = new Date();
  }
  vm.toggleMax();
  //弹出式日历触发函数
  vm.openStart = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.openedStart = true;
  };

    //弹出式日历触发函数
  vm.openEnd = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.openedEnd = true;
  };

  //自定义选项
  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    formatDayTitle: 'yyyy MMMM',
  };

  //输出格式控制,来源:官方date filter
  vm.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd', 'shortDate'];
  vm.format = vm.formats[0];
});