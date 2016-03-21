'use strict';
angular.module('registryUiApp').controller('CsImageMenuController' ,function(){
    var vm = this;
    vm.cmd = 'copy file';
    vm.removeImage = function(){
        swal({
          title: "Are you sure?",
          text: "This operation cannot be undone!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "No, cancel !",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function(isConfirm){
          if (isConfirm) {
                toastr.success('success');
           } 
           else {
              toastr.error('cancel');
          }
        });
    };
});
angular.module('registryUiApp').directive('csImageMenu', function(){
  return {
      restrict: 'E',
      scope:  {
        image: '=',
        version: '=',
        namespaces: '='
      },
      templateUrl: 'components/unit/csImageMenu/csImageMenu.html',
      controller: 'CsImageMenuController as vm',
  }
});