'use strict';
angular.module('registryUiApp').controller('CsSearchDropboxController' ,function(){
    var vm = this;

});
angular.module('registryUiApp').directive('csSearchDropbox', function(){
  return {
      restrict: 'E',
      scope:  {
        repositories: '=',
        keyword: '='
      },
      templateUrl: 'components/unit/csSearchDropbox/csSearchDropbox.html',
      controller: 'CsSearchDropboxController as vm',
  }
});