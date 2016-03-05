'use strict';
angular.module('registryUiApp').factory('AuthHandler', function AuthHandlerFactory($q) {
  return {
    responseError: function (rejection) {
      if (rejection.status === 401) {
          toastr.error('error code:401', 'Unauth');
          return $q.reject(rejection);
      } else {
        return $q.reject(rejection);
      }
    }
  };
});
