'use strict';

angular.module('registryUiApp').controller('AppLayoutController', function AppLayoutController() {
  var vm = this;

});
angular.module('registryUiApp').directive('appLayout', function appLayout() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/_layout.html',
    controller: 'AppLayoutController as vm'
  };
});
