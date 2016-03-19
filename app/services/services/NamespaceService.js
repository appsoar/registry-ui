/**
 * Created by liwei on 2016/3/19.
 */
'use strict'

angular.module('registryUiApp')
    .factory('namespaceService', ['$resource', function($resource)
    {
        return $resource('/v2/tabledata', {}, {
            'query':{
                method:'GET',
                isArray:false,
                transformResponse:function(data, headers){
                    var resp = angular.fromJson(data);
                    var ret = {
                        result: [],
                        total: resp.total
                    };
                    angular.forEach(resp.result, function(item){
                        ret.result.push({
                            Namespace: item.Namespace,
                            Type:item.Type,
                            ImageNum:item.ImageNum,
                            Date:item.Date,
                            PullNum:item.PullNum
                        });
                    });
                    return ret;
                }
            }
        })
    }])


