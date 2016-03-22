'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('/api/v0/login', {}, {
       'login': {
        method:'post'
       }
  });
}).factory('LogoutService', function ($resource) {
    return $resource('/api/v0/logout', {}, {
       'logout': {
        method:'post'
       }
  });
});