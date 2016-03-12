'use strict';
angular.module('registryUiApp').controller('LoginController', function($state, LoginService){
  var vm = this;
  vm.form={};
  vm.logining = false;
  vm.submit  = function(form){
      vm.logining = true;
      LoginService.save({}, form,function() {
        // toastr.success('yes.', 'login success', {timeOut: 3000});
        vm.logining = false;
        $state.go('home.dashboard');
      },function(){
        vm.logining = false;
        toastr.error('no.', 'username or password error', {timeOut: 3000});
      });   
   };
});