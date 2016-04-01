/**
 * Created by liwei on 16-3-29.
 */
'use strict'

var userGrouoApp = angular.module('registryUiApp');

namespaceApp.factory('userService',['$scope','$resource', function($scope,$resource){

}]);

namespaceApp.factory('userListService',['$resource', function($resource){
    return $resource('services/users.json', {}, {
        'query': {
            method:'GET',
            isArray: true,
            transformResponse: function(data, headers){
                var repos = angular.fromJson(data);

                if(repos.result == "0") {
                    var temp =  angular.fromJson(data).content;
                    var contentColl = [];

                    angular.forEach(temp, function(item){
                        contentColl.push(item);
                    });

                    return contentColl;
                }
                else{
                    toastr.success('获取用户列表出错.', repos.message, {timeOut: 3000});
                }
            }
        }
    })
}]);
