'use strict';
angular.module('registryUiApp').controller('LoginController', function($state, LoginService, md5){
  var vm = this;
  vm.form={};
  vm.logining = false;
  vm.submit  = function(form){
      vm.logining = true;
      var md5Form = {
          username: form.username,
          password:   md5.createHash(form.username + ':' + md5.createHash(form.password))
      };
      // LoginService.save({}, md5Form,function() {
      LoginService.login({}, form,function() {
        vm.logining = false;
        sessionStorage.currentUser = form.username;
        $state.go('home.dashboard');
      },function(responseHeaders){
        vm.logining = false;
        console.log(responseHeaders);
        if(responseHeaders.status === 401){
            toastr.error('no.', 'username or password error', {timeOut: 3000});  
        }
      });   
   };
});