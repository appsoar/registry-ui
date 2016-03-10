'use strict';
angular.module('registryUiApp').controller('CsSearchDropboxController' ,function(){
    var vm = this;

});
angular.module('registryUiApp').directive('csSearchDropbox', function(){
  return {
      restrict: 'E',
      scope:  {
        repositories: '='
      },
      templateUrl: 'components/unit/csSearchDropbox.html',
      controller: 'CsSearchDropboxController as vm',
  }
});