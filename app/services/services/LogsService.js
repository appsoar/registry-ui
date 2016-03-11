'use strict';

angular.module('registryUiApp').factory('LogsService', function($resource){
    // return $resource('/data/logs.json', {}, {
    return $resource('/v2/logs', {}, {
        'query': {
            method: 'GET',
            isArray: true,
            transformResponse: function(data){
                var  logs = [];
                try{
                    // row function(=>) will fail when grunt unit test, so all forEach use angular's way
                    // angular.fromJson(data).lines.forEach((item) => {
                    //     var log = '';
                    //     angular.forEach(item, function(value, key) {
                    //         log =log + ' ' + (key + '= ' + value);
                    //     });
                    //     logs.push(log);
                    // });
                    angular.forEach(angular.fromJson(data).lines, function(item){
                        var log = '';
                        angular.forEach(item, function(value, key) {
                            log =log + ' ' + (key + '= ' + value);
                        });
                        logs.push(log);
                    });
                }catch(e){
                  console.error(e);
                }
                return logs;
            }
        }
    });
});