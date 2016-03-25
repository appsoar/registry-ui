'use strict';

angular.module('registryUiApp').controller('EmailController', function(_){
      var vm = this;
      vm.emailList = [{
          addr: 'bin.long@cloudsoar.com',
          ssl: true,
          port: 8080,
          level: 'warning'
      },
      {
          addr: 'admin@cloudsoar.com',
          ssl: false,
          port: 8000,
          level: 'info'
      },
      {
          addr: 'dx@cloudsoar.com',
          ssl: true,
          port: 443,
          level: 'error'
      }];
      vm.addEmail = function(){
          vm.emailList.push({
              id: vm.emailList.length + Math.random() ,
              addr: '',
              ssl: true,
              port: '',
              level: 'info'
          });
      }
      vm.removeEmail = function(email){
          _.pullAllWith(vm.emailList, [email], _.isEqual);
      }
});