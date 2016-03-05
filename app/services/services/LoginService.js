'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('/v2/login', {}, {
      'save': {
        method:'POST',
        // isArray: false
       },
  });
});