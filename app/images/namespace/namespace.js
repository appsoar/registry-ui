/**
 * Created by liwei on 2016/3/18.
 */
'use strict';

var namespaceApp = angular.module('registryUiApp');

namespaceApp.controller('namespaceCtrl', ['$scope', '$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService', 'namespaceListService','namespaceService','$state',
    function ($scope, $filter, ngTableParams, $resource, $timeout, ngTableDataService, namespaceListService,namespaceService,$state) {
        var vm = this;
        vm.resp = namespaceListService.query();

        //console.log(vm.resp)
        vm.tableParams = new ngTableParams({
            page: 1,
            count: 10,
            sorting: {
                _id: 'asc'
            }
        }, {
            total: 0,
            counts: [],
            getData: function ($defer, params) {
                ngTableDataService.getData($defer, params);
            }
        });

        vm.Delete = function(_id){
            namespaceService.delete({namespace_id: _id});
            $state.go('home.images.namespace.list',{}, {reload: true});
        }
    }]);



namespaceApp.service('ngTableDataService', ['namespaceListService', '$filter', function (namespaceListService, $filter) {
    var TableData = {
        cache: null,
        getData: function ($defer, params) {
            // if no cache, request data and filter
            if (!TableData.cache) {
                var test = namespaceListService.query();
                if (test) {
                    namespaceListService.query(function (data) {
                        TableData.cache = data;
                        filterdata($defer, params);
                    });
                }
            }
            else {
                filterdata($defer, params);
            }

            function filterdata($defer, params) {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(TableData.cache.result, params.orderBy()) : TableData.cache.result;

                var from = (params.page() - 1) * params.count();
                var to = params.page() * params.count();
                var filteredData = orderedData.slice(from, to);

                params.total(TableData.cache.total);
                $defer.resolve(filteredData);
                TableData.cache=null;
            }

        }
    };

    return TableData;
}]);

namespaceApp.controller('namespaceEditCtrl', ['$scope', '$location', '$stateParams','namespaceService','$state', function ($scope, $location, $stateParams,namespaceService,$state) {
    var vm = this;
    vm.selectModle = [
        { name: '公有', value: 'public' },
        { name: '私有', value: 'private' }
    ];
    vm.selected = "public";
    vm.selectedChange = function () {
        alert(vm.selected)
    }

    // console.log($stateParams.id);
    vm.namespace = {
        _id: $stateParams._id,
        create_time:"",
        desc: "",
        owner_id: "",
        permission: "public",
        repo_num: 0
    };
    // vm.namespace=namespace;

    //判断参数是否存在ID
    if ($stateParams._id) {
        //alert($stateParams.id)
        vm.namespace = namespaceService.query({namespace_name: $stateParams._id});
        console.log(vm.namespace)
       // vm.namespace.Namespace = "测试";
    }
    else {
        console.log('add')
    }

    vm.Save = function(){
        if ($stateParams._id){
        var saveData = {_id: vm.namespace._id,permission: vm.namespace.permission, desc: vm.namespace.desc};
        namespaceService.save({},saveData);
        }else{
            var saveData = {permission: vm.namespace.permission, desc: vm.namespace.desc};
            namespaceService.update({namespace_id: vm.namespace._id},saveData);
        }
       $state.go('home.images.namespace.list',{}, {reload: true});
    }
}]);

namespaceApp.controller('namespaceViewCtrl', ['$scope', '$stateParams','namespaceService', function ($scope, $stateParams,namespaceService) {
    //alert($stateParams._id)
    var vm = this;
    //console.log(namespaceService.query({namespace_name: $stateParams._id}))
    vm.namespace=namespaceService.query({namespace_name: $stateParams._id});

    //namespaceService.save({},{_id:'123',permission:'public',desc:'11111'});


}]);
