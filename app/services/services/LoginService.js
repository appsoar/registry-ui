'use strict';

angular.module('registryUiApp').factory('LoginService', function ($resource) {
    return $resource('test.json', {}, {
      'query': {
        method:'GET',
        isArray: false,
       },
  });
});