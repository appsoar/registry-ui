'use strict';
angular.module('registryUiApp')
.factory('Repository', function($resource){
  return $resource('/api/repositories', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
          var temp = angular.fromJson(data).content;
          var collection = {
              repositories: [],
              tag: [],
              namespaces:[]
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
}).factory('Namespace', function($resource, _){
  return $resource('/api/namespaces', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
          var temp = angular.fromJson(data).content;
          var collection = {
              namespaces: [],
              permission: []
          };
          var permission = []
          angular.forEach(temp, function(item){
              collection.namespaces.push(item._id);
              permission.push(item.permission);
          });
          collection.permission = _.uniq(permission);
          return collection;
      }
    },
  });
}).factory('ImageDetail', function($resource){
    return $resource('/api/repository/:namespace/:reponame', {}, {
    'query': {
      method:'GET',
      isArray: true,
      transformResponse: function(data, headers){
          return angular.fromJson(data).content;
      }
    },
    'tag': {
        url: '/api/tag/:namespace/:reponame/:tag',
        method: 'GET',
        isArray: false,
        transformResponse: function(data, headers){
            return angular.fromJson(data).content;
        }
    }
  });
});

