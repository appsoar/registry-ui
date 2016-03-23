'use strict';
angular.module('registryUiApp').controller('CsImageMenuController' ,function($state){
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
    vm.moreInfo = function(image,version) {
          var path = image._id.split('/');
          $state.go('home.images.detail', {namespace: path[0], reponame: path[1], tag: version.tag_name});
    }
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
        namespaces: '=',
        type: '@'
      },
      templateUrl: 'components/unit/csImageMenu/csImageMenu.html',
      controller: 'CsImageMenuController as vm',
  }
});