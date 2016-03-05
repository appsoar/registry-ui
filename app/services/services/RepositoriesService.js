'use strict';
angular.module('registryUiApp')
.factory('Repository', ['$resource', function($resource){
  return $resource('/v2/_catalodx', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
        var ret = {};
        try{
        var repos = angular.fromJson(data).repositories;
        var last = undefined;
        var lastNamespace = undefined;
        var lastRepository = undefined;
        var linkHeader = headers()['link'];
        if (linkHeader) {
          var lastUrl = ''+linkHeader.split(';')[0].replace('<','').replace('>','');
          var startPos = lastUrl.search('last=');
          if (startPos >= 0) {
            var endPos = lastUrl.substring(startPos).search('&');
            if (endPos >= 0) {
              last = lastUrl.substring(startPos+'last='.length, startPos+endPos);
              var parts = last.split('%2F');
              if (parts.length == 2) {
                lastNamespace = parts[0];
                lastRepository = parts[1];
              }
            }
          }
        }
        ret = {
          repos: [],
          lastNamespace: lastNamespace,
          lastRepository: lastRepository
        };
        angular.forEach(repos, function(value/*, key*/) {
          ret.repos.push({
            username: ''+value.split('/')[0],
            name: value,
            selected: false
          });
        });}catch(e){
          ret = {};
        }
        return ret;
      }
    },
    'delete': {
      url: '/v2/repositories/:repoUser/:repoName/',
      method: 'DELETE',
    }
  });
}])
.factory('Tag', ['$resource', function($resource){
  return $resource('/v2/:repoUser/:repoName/tags/list', {}, {
    'query': {
      method:'GET',
      isArray: true,
      transformResponse: function(data/*, headers*/){
        var res = [];
        console.log(data);
        var resp = angular.fromJson(data);
        for (var idx in resp.tags){
          res.push({
            name: resp.tags[idx],
            imageId: 'ImageIDOf'+resp.tags[idx],
            selected: false
          });
        }
        return res;
      },
    },
    'delete': {
      url: '/v1/repositories/:repoUser/:repoName/tags/:tagName',
      method: 'DELETE',
    },
    'exists': {
      url: '/v1/repositories/:repoUser/:repoName/tags/:tagName',
      method: 'GET',
      transformResponse: function(data/*, headers*/){
        data = angular.isString(angular.fromJson(data));
        return data;
      },
    },  
    'save': {
      method:'PUT',
      url: '/v1/repositories/:repoUser/:repoName/tags/:tagName',
    },
  });
}])
.factory('Manifest', ['$resource', function($resource){
  return $resource('/v2/:repoUser/:repoName/manifests/:tagName', {}, {
    'query': {
      method:'GET',
      isArray: false,
      transformResponse: function(data, headers){
        var res = {};
        var history = [];
        var tmp;
        var resp = angular.fromJson(data);
        var v1Compatibility = undefined;
        for (var idx in resp.history){
          v1Compatibility = angular.fromJson(resp.history[idx].v1Compatibility);
          if(v1Compatibility !== undefined){
            tmp = {
              id : v1Compatibility.id,
              os : v1Compatibility.os,
              docker_version: v1Compatibility.docker_version,
              created: v1Compatibility.created,
            };
            if(v1Compatibility.author){
              tmp.author = v1Compatibility.author;
            }
            if(v1Compatibility.config && v1Compatibility.config.Labels){
              tmp.labels = v1Compatibility.config.Labels;
            }
            history.push(tmp);
          }
        }
        if(history.length > 0){
          res = history[0];
          res.history = history;
        }
        res.fsLayers = resp.fsLayers;
        res.digest = headers('docker-content-digest');
        res.architecture = resp.architecture;
        return res;
      },
    }
  });
}]);
