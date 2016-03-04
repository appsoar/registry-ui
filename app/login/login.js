'use strict'
angular.module('registryUiApp').controller('LoginController', function($state, LoginService){
  var login = this;
  login.username='';
  login.password='';
  login.login  = function(){
      LoginService.query({
        username: login.username,
        password: login.password
      }).$promise.then(function() {
        toastr.success('yes.', 'login success', {timeOut: 3000});
        $state.go('home');
      },function(){
        toastr.error('no.', 'login fail', {timeOut: 1000});
      });
   };
});