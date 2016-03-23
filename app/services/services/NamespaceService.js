/**
 * Created by liwei on 2016/3/19.
 */
'use strict'

var namespaceApp = angular.module('registryUiApp');
var url = "http://192.168.12.112:8080";
namespaceApp.factory('namespaceListService', ['$resource', function($resource)
    {
        //{"content": [{"_id": "appsoar", "create_time": 1458301228013.0, "owner_id": "admin", "desc": ""}], "message": "done", "result": 0}
        return $resource(url+'/api/namespaces', {}, {
            'query': {
                method:'GET',
                isArray: false,
                transformResponse: function(data, headers){
                    //console.log(data)
                    var repos = angular.fromJson(data);

                    //console.log(repos.length)
                    if(repos.result == "0") {
                        var content = repos.content;
                        var ret = {
                            result: [],
                            total: content.length
                        };
                        angular.forEach(content, function (value/*, key*/) {
                            ret.result.push({
                                _id : value._id,
                                permission : value.permission,
                                create_time : new Date(value.create_time),
                                owner_id : value.owner_id,
                                desc : value.desc,
                                imgNum : value.repo_num
                            });
                        });
                        return ret;
                    }
                    else{
                        console.log(repos.message);
                    }
                }
            }
        })
    }]);

namespaceApp.factory('namespaceService', ['$resource', function($resource){

}]);


