'use strict';
angular.module('registryUiApp').factory('AuthHandler', function AuthHandlerFactory($q) {
    var AuthHandler = {};
  return {
    responseError: function (rejection) {
      if (rejection.status === 401) {
          return $q.reject(rejection);
      } else {
        return $q.reject(rejection);
      }
    }
  };
});
