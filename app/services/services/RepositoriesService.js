'use strict';
angular.module('registryUiApp')
.factory('Repository', ['$resource', function($resource){
  return $resource('/v2/repositories', {}, {
    'query': {
      method:'GET',
      isArray: true,
      transformResponse: function(data, headers){
          var temp = angular.fromJson(data);
          var repositories = [];
          // temp.repositories.forEach((item) => {
          //     repositories.push(item.namespace + '/' + item.name);
          // });
          angular.forEach(temp.repositories, function(item){
              repositories.push(item.namespace + '/' + item.name);
          });
          return repositories;
      }
    },
  });
}]);

