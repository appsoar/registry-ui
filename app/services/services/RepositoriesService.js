'use strict';
angular.module('registryUiApp')
.factory('Repository', ['$resource', function($resource){
  return $resource('/api/v0/repositories', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
          var temp = angular.fromJson(data);
          // var repositories = [];
          // temp.repositories.forEach((item) => {
          //     repositories.push(item.namespace + '/' + item.name);
          // });
          // angular.forEach(temp.repositories, function(item){
          //     repositories.push(item.namespace + '/' + item.name);
          // });
          // return repositories;
          return temp;
      }
    },
  });
}]);

