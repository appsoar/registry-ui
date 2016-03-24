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
    return $resource(url + '/api/namespace/:namespace_name', {},{
        'query':{
            method:'GET',
            isArray: false,
            transformResponse: function(data, headers){
                var repos = angular.fromJson(data);
                //console.log(repos);
                if(repos.result=="0"){
                    //{"content": {"permission": "public", "_id": "appsoar", "create_time": 1458301228013.0, "owner_id": "admin", "desc": ""}, "message": "done", "result": 0}
                    //console.log(repos.content)
                  return repos.content;
                }
                else
                {
                    console.log(repos.mssage)
                }
            }
        },
        'save': {
            method:'POST',
            url:url +'/api/namespace',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: function(data, headers) {
                var repos = angular.fromJson(data);
                if(repos.result == "0"){

                }
                else{
                    toastr.error('Error.', repos.message, {timeOut: 3000});
                }
            }
        },
        'update':{
            method:'PUT',
            url:url +'/api/namespace/:namespace_id',
            headers: {
                "Access-Control-Allow-Methods":"PUT",
                'Access-Control-Allow-Headers': 'X-Requested-With'
            },
        },
        'delete': {
            method:'DELETE',
            url:url +'/api/namespace/:namespace_id',
            headers: {
                "Access-Control-Allow-Methods":"DELETE",
                'Access-Control-Allow-Headers': 'X-Requested-With'
            },
            transformResponse: function(data, headers) {
                var repos = angular.fromJson(data);
                if(repos.result == "0"){

                }
                else{
                    toastr.error('Error.', repos.message, {timeOut: 3000});
                }
            }
        }
    })
}]);


