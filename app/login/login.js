'use strict';
angular.module('registryUiApp').controller('LoginController', function($state, LoginService,  wsService){
  var vm = this;
  vm.form={};
  vm.submit  = function(form){
      LoginService.save({}, form,function() {
        // toastr.success('yes.', 'login success', {timeOut: 3000});
        $state.go('home.dashboard');
      },function(){
        toastr.error('no.', 'username or password error', {timeOut: 3000});
      });   
   };
});