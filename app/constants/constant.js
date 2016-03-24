'use strict';

angular.module('registryUiApp')
  .constant('_',window._)
  .constant('wsUrl', 'ws://192.168.12.22:9000/api/v0/sysinfo')
  .constant('wsdashboardStatisticUrl', 'ws://192.168.12.22:9000/api/v0/stats')
    .constant('apiUrl', 'http://192.168.12.112:8080');
