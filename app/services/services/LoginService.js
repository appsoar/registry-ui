'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('/v2/login', {}, {
      'save': {
        method:'POST',
        // isArray: false
       },
       'query': {
        url: '/v2/test',
        method:'GET',
       }
  });
});