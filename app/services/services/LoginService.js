'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('/api/v0/login', {}, {
      'save': {
        method:'POST',
        // isArray: false
       },
       'query': {
        url: '/api/v0/test',
        method:'GET',
       }
  });
});