/**
 * Created by liwei on 2016/3/23.
 */
var iopsApp = angular.module('registryUiApp');

iopsApp.factory('iopsListService', ['$resource', function($resource) {
    return $resource('/api/sysinfo/netifs', {}, {
        'query': {
            method:'GET',
            isArray: true,
            transformResponse: function(data){
                //console.log(data)
                try{
                    var repos = angular.fromJson(data);
                    return repos;

                }catch(e){
                console.error(e);
                return [];
            }
            }
        }
    })
            }]);
//{"iface":"ens33","TxBytes":3020,"RxBytes":1544}
    iopsApp.factory('iopsService', ['$resource', function($resource) {
        return $resource('/api/sysinfo/netifs/:netifs', {}, {
            'query': {
                method:'GET',
                isArray: false,
                transformResponse: function(data){
                    try{
                        var repos = angular.fromJson(data);
                        return repos;
                    }catch(e){
                        console.error(e);
                        return [];
                    }
            }
        }
    })
}]);

