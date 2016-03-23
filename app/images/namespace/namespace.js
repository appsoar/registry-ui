/**
 * Created by liwei on 2016/3/18.
 */
'use strict';

var namespaceApp = angular.module('registryUiApp');

namespaceApp.controller('namespaceCtrl', ['$scope', '$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService', 'namespaceListService',
    function ($scope, $filter, ngTableParams, $resource, $timeout, ngTableDataService, namespaceListService) {
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
            }

        }
    };

    return TableData;
}]);

namespaceApp.controller('namespaceEditCtrl', ['$scope', '$location', '$stateParams', function ($scope, $location, $stateParams) {
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
        id: $stateParams.id,
        Namespace: "",
        Type: "",
        ImageNum: "",
        Date: "",
        PullNum: ""
    };
    // vm.namespace=namespace;

    //判断参数是否存在ID
    if ($stateParams.id) {
        console.log($stateParams.id)
        vm.namespace.Namespace = "测试";
    }
    else {
        console.log('add')
    }
}]);

namespaceApp.controller('namespaceViewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    //alert($stateParams._id)
    var vm = this;
    vm.namespace = {
        _id: $stateParams._id,
        permission: 'public',
        create_time: new Date(),
        owner_id: 'admin',
        desc: '123',
        imgNum: 100,
    };

}]);
