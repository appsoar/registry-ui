'use strict';

angular.module('registryUiApp').factory('ErrorHandler', function ErrorHandlerFactory($q) {
  var ErrorHandler = {};

  ErrorHandler.request = function (config) {
    if (config.data && config.data.$skipErrorHandler) {
      config.$skipErrorHandler = true;
      delete config.data.$skipErrorHandler;
    }
    if (config.params && config.params.$skipErrorHandler) {
      config.$skipErrorHandler = true;
      delete config.params.$skipErrorHandler;
    }
    return $q.when(config);
  };
  ErrorHandler.responseError = function (rejection) {
    console.error(rejection);
    if (rejection.status === 401) {
      return $q.reject(rejection);
    }

    if (rejection.config && !rejection.config.$skipErrorHandler) {
      switch (rejection.status) {
        case 0:
          toastr.error('error code: 0','abort or cross origin');
          break;
        case 400:
          var data = rejection.data || {};
          if (angular.isString(data)) {
            data = angular.fromJson(data);
          }
          var message = data.message || data.code;
          toastr.error('error code: 400', message);
          break;
        case 403:
          toastr.error('error code: 403', '您没有权限访问此功能：' + rejection.config.method + ' ' + rejection.config.url);
          break;
        case 404:
          toastr.error('error code: 404', '您请求的功能不存在：' + rejection.config.method + ' ' + rejection.config.url);
          break;
        case 406:
          toastr.error('error code: 406', '内部错误：数据格式不正确！');
          break;
        case 500:
          toastr.error('error code: 500', '内部错误：' + rejection.status + ' - ' + rejection.data);
          break;
        default:
          toastr.error('error code: NAN','其他错误：' + rejection.status + ' - ' + rejection.data);
      }
    }
    return $q.reject(rejection);
  };
  return ErrorHandler;
});
