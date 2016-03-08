'use strict';

angular.module('registryUiApp').factory('LogsService', function($resource){
    return $resource('/data/logs.json', {}, {
        'query': {
            method: 'GET',
            isArray: true,
            transformResponse: function(data){
                var  logs = [];
                try{
                    angular.fromJson(data).lines.forEach((item) => {
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