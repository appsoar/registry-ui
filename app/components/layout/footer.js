'use strict';

angular.module('registryUiApp').controller('LayoutFooterController', function LayoutFooterController() {
  var vm = this;

});
angular.module('registryUiApp').directive('layoutFooter', function LayoutFooter() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/footer.html',
    controller: 'LayoutFooterController as vm'
  };
});
