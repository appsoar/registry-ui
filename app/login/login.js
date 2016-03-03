'use strict'
angular.module('registryUiApp').controller('LoginController', function($state){
  var login = this;
  login.username='admin';
  login.password='123';
  login.login  = function(){
    if(login.username == 'admin' && login.password == '123')
    {
      toastr.success('yes.', 'login success', {timeOut: 3000});
      $state.go('home');
    }else{
      toastr.error('no.', 'login fail', {timeOut: 1000});
    }
  };
});