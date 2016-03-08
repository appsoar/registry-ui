'use strict';

angular.module('registryUiApp').controller('LayoutSettingHeaderController', function LayoutHeaderController() {
  var vm = this;
});

angular.module('registryUiApp').directive('layoutSettingHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'settings/setting-header.html',
    controller: 'LayoutSettingHeaderController as vm'
  };
});
