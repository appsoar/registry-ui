'use strict';
angular.module('registryUiApp').controller('RepositoryListController',  function(Repository){
    var vm = this;
    Repository.query({}).$promise.then(function(){
      // toastr.success('error code: 200', 'ok');
    },function(){
      //tips: code in here exec after interceptors
      // toastr.error('error code: 404', 'message');
    });
  });
