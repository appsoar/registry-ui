'use strict';
angular.module('registryUiApp')
.factory('Repository', ['$resource', function($resource){
  return $resource('/api/v0/repositories', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
          var temp = angular.fromJson(data).content;
          var collection = {
              repositories: [],
              tag: []
          };
          angular.forEach(temp, function(item){
              collection.repositories.push(item);
              collection.tag.push(item.tags[0]);
          });
          // return repositories;
          return collection;
      }
    },
  });
}]);

