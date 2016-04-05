'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('/api/login', {}, {
       'login': {
        method:'post'
       }
  });
}).factory('LogoutService', function ($resource) {
    return $resource('/api/logout', {}, {
       'logout': {
        method:'post'
       }
  });
});