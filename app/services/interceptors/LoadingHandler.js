'use strict';

angular.module('registryUiApp').factory('LoadingHandler', function LoadingHandlerFactory($rootScope, $q) {
  var LoadingHandler = {};
  var ref = 0;

  var progress = function(ref) {
    $rootScope.$broadcast('loading.level', ref);
  };
  var start = function() {
    $rootScope.$broadcast('loading.begin');
  };
  var stop = function() {
    $rootScope.$broadcast('loading.end');
  };
  var incRef = function () {
    ++ref;
    if (ref === 1) {
      start();
    }
    progress(ref);
  };

  var decRef = function () {
    --ref;
    progress(ref);
    if (ref === 0) {
      stop();
    }
  };

  LoadingHandler.request = function (config) {
    if(config.url.indexOf('/api')> -1){
      // config.timeout = 10000;
      incRef();
    }
    return $q.when(config);
  };

  LoadingHandler.response = function (resp) {
    if(resp.config.url.indexOf('/api')> -1){
      decRef();
    }
    return $q.when(resp);
  };

  LoadingHandler.responseError = function (rejection) {
    if(rejection.config.url.indexOf('/api')> -1){
      decRef();
    }
    return $q.reject(rejection);
  };
  return LoadingHandler;
});
