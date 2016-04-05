'use strict';

angular.module('registryUiApp').factory('LogsService', function($resource){
    // return $resource('/data/logs.json', {}, {
    return $resource('/api/logs/:num', {}, {
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
                    var logs = [];
                    angular.forEach(angular.fromJson(data).content, function(item){
                        var temp = item.split(/\[[0-9]{1,20}\-[0-9]{1,20}\]/);
                        var log = temp[0].split(/\,[0-9]{3}\ /);
                        logs.push({time: log[0], level: log[1], detail: temp[1]});
                    });
                    // console.log(logs);
                    return logs;
                }catch(e){
                  console.error(e);
                  return [];
                }
                // return logs;
            }
        }
    });
});
