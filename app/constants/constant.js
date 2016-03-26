'use strict';

angular.module('registryUiApp')
  .constant('_',window._)
  .constant('wsUrl', 'ws://0.0.0.0:9090/api/v0/sysinfo')
  .constant('wsdashboardStatisticUrl', 'ws://0.0.0.0:9090/api/v0/stats')
  .constant('apiUrl', 'http://0.0.0.0:9182');
