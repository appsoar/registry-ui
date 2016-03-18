'use strict';
angular.module('registryUiApp').controller('CsImageMenuController' ,function(){
    var vm = this;

});
angular.module('registryUiApp').directive('csImageMenu', function(){
  return {
      restrict: 'E',
      scope:  {
        image: '@',
        version: '@'
      },
      templateUrl: 'components/unit/csImageMenu/csImageMenu.html',
      controller: 'CsImageMenuController as vm',
  }
});