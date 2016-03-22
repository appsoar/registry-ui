'use strict';

angular.module('registryUiApp').factory('LogsService', function($resource){
    // return $resource('/data/logs.json', {}, {
    return $resource('/api/v0/logs', {}, {
        'query': {
            method: 'GET',
            isArray: true,
            transformResponse: function(data){
                try{
                    // row function(=>) will fail when grunt unit test, so all forEach use angular's way
                    // angular.fromJson(data).lines.forEach((item) => {
                    //     var log = '';
                    //     angular.forEach(item, function(value, key) {
                    //         log =log + ' ' + (key + '= ' + value);
                    //     });
                    //     logs.push(log);
                    // });
                    // angular.forEach(angular.fromJson(data).lines, function(item){
                    //     var log = '';
                    //     angular.forEach(item, function(value, key) {
                    //         log =log + ' ' + (key + '= ' + value);
                    //     });
                    //     logs.push(log);
                    // });
                    return angular.fromJson(data).lines;
                }catch(e){
                  console.error(e);
                  return [];
                }
                // return logs;
            }
        }
    });
});