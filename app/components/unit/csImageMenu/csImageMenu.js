'use strict';
angular.module('registryUiApp').controller('CsImageMenuController' ,function($scope){
    var vm = this;
    var options = {
          title: "Are you sure?",
          text: "This operation cannot be undone!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "No, cancel !",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: true,
          closeOnCancel: true
    }
    // vm.cmd ='docker pull ' + $scope.image._id + ':' + $scope.version.tag_name;
    vm.removeImage = function(){
        swal(options,
        function(isConfirm){
          if (isConfirm) {
                toastr.success('Delete image API is not ready yet');
           } 
           else {
              toastr.error('cancel');
          }
        });
    };

    vm.removeVersion = function(){
        swal(options,
        function(isConfirm){
          if (isConfirm) {
                toastr.success('Delete version API is not ready yet');
           } 
           else {
              toastr.error('cancel');
          }
        });
    };

    vm.copyImage = function(namespace,image,version){
        console.log(namespace);
        console.log(image);
        console.log(version);
        toastr.warning('Copy API is not ready yet');
    }
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