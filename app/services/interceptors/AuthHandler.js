'use strict';
angular.module('registryUiApp').factory('AuthHandler', function AuthHandlerFactory($injector, $q) {
  return {
    responseError: function (rejection) {
      var $state = $injector.get('$state');
      if (rejection.status === 401&& rejection.config.url != '/api/v0/login') {
      // if (rejection.status === 401) {
          toastr.error('error code:401', 'Unauth');
          $state.go('login');
          return $q.reject(rejection);
      } else {
        return $q.reject(rejection);
      }
    }
  };
});
