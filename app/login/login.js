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
      LoginService.save({}, md5Form,function() {
      // LoginService.save({}, form,function() {
        // toastr.success('yes.', 'login success', {timeOut: 3000});
        vm.logining = false;
        // currentUser.username = form.username;
        sessionStorage.currentUser = form.username;
        // console.log(currentUser);
        $state.go('home.dashboard');
      },function(){
        vm.logining = false;
        toastr.error('no.', 'username or password error', {timeOut: 3000});
      });   
   };
});