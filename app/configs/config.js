'use strict';

angular.module('registryUiApp').config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthHandler');
  $httpProvider.interceptors.push('ErrorHandler');
  $httpProvider.interceptors.push('LoadingHandler');
});