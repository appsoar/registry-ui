/**
 * Created by liwei on 2016/3/19.
 */
'use strict'

var namespaceApp = angular.module('registryUiApp');

namespaceApp.factory('namespaceListService', ['$resource', 'apiUrl', function($resource, apiUrl)
    {
        //{"content": [{"_id": "appsoar", "create_time": 1458301228013.0, "owner_id": "admin", "desc": ""}], "message": "done", "result": 0}
        return $resource(apiUrl+'/api/namespaces', {}, {
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
                        toastr.success('获取命名空间出错.', repos.message, {timeOut: 3000});
                    }
                }
            }
        })
    }]);

namespaceApp.factory('namespaceService', ['$resource', 'apiUrl', function($resource, apiUrl){
    return $resource(apiUrl + '/api/namespace/:namespace_name', {},{
        'query':{
            method:'GET',
            isArray: false,
            transformResponse: function(data, headers){
                var repos = angular.fromJson(data);
                if(repos.result=="0"){
                  return repos.content;
                }
                else
                {
                    toastr.success('获取命名空间出错.', repos.message, {timeOut: 3000});
                }
            }
        },
        'save': {
            method:'POST',
            url:apiUrl +'/api/namespace/add',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: function(data, headers) {
                var repos = angular.fromJson(data);
                if(repos.result == "0"){
                    toastr.success('添加命名空间成功.', repos.message, {timeOut: 3000});
                }
                else{
                    toastr.error('添加命名空间错误.', repos.message, {timeOut: 3000});
                }
            }
        },
        'update':{
            method:'POST',
            url:apiUrl +'/api/namespace/update/:namespace_id',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: function(data, headers) {
                var repos = angular.fromJson(data);
                if(repos.result == "0"){
                    toastr.success('修改命名空间成功.', repos.message, {timeOut: 3000});
                }
                else{
                    toastr.error('修改命名空间错误.', repos.message, {timeOut: 3000});
                }
            }
        },
        'delete': {
            method:'POST',
            url:apiUrl +'/api/namespace/delete/:namespace_id',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: function(data, headers) {
                console.log(data)
                var repos = angular.fromJson(data);
                if(repos.result == "0"){
                    toastr.success('删除命名空间成功.', repos.message, {timeOut: 3000});
                }
                else{
                    toastr.error('删除命名空间错误.', repos.message, {timeOut: 3000});
                }
            }
        }
    })
}]);


