'use strict';

angular.module('registryUiApp').controller('LogsController', function( LogsService){
    var vm = this;
    LogsService.query().$promise.then(function(value, responseHeaders){
      vm.logs = value;
    },function(httpResponse){});

    //初始化日期
  vm.today = function() {
    vm.calendar1 = new Date();
    vm.calendar2 = new Date();
  };
  vm.today();

  //清除当前日期
  vm.clear = function() {
    vm.calendar1 = null;
    vm.calendar2 = null;
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
  vm.open1 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.opened1 = true;
  };

    //弹出式日历触发函数
  vm.open2 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.opened2 = true;
  };

  //自定义选项
  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    formatDayTitle: 'yyyy MMMM'
  };

  //输出格式控制,来源:官方date filter
  vm.formats = ['yyyy-MMMM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd', 'shortDate'];
  vm.format = vm.formats[1];
});