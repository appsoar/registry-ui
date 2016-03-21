/**
 * Created by liwei on 2016/3/18.
 */
'use strict';

var namespaceApp = angular.module('registryUiApp');

namespaceApp.controller('namespaceCtrl', ['$scope', '$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService','namespaceService',
    function($scope, $filter, ngTableParams, $resource, $timeout, ngTableDataService, namespaceService) {
    var vm = this;

    //var test=namespaceService.query();
    //console.log(test)


    var Api = $resource('images/namespace/table-data.json');

    vm.tableParams5 = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: 0,           // length of data
        counts: [],         // hide page counts control
        getData: function($defer, params) {

            // Service using cache to avoid mutiple requests
            ngTableDataService.getData( $defer, params, Api);


        }
    });
}]);

namespaceApp.controller('namespaceEditCtrl',['$scope', '$location','$stateParams', function($scope,   $location, $stateParams){
    var vm = this;
  // console.log($stateParams.id);
    var namespace= {
        id: $stateParams.id,
        Namespace:"",
        Type:"",
        ImageNum:"",
        Date:"",
        PullNum:""
    };
    vm.namespace=namespace;

    //判断参数是否存在ID
    if($stateParams.id){
        console.log($stateParams.id)
        namespace.Namespace = "测试";
    }
    else{
        console.log('add')
    }
}]);

namespaceApp.controller('namespaceViewCtrl', ['$scope', function($scope){

}]);


// NOTE: We add the service definition here for quick reference
namespaceApp.service('ngTableDataService', function() {

    var TableData = {
        cache: null,
        getData: function($defer, params, api){
            // if no cache, request data and filter
            if ( ! TableData.cache ) {
                if ( api ) {
                    api.get(function(data){
                        TableData.cache = data;
                        filterdata($defer, params);
                    });
                }
            }
            else {
                filterdata($defer, params);
            }

            function filterdata($defer, params) {
                var from = (params.page() - 1) * params.count();
                var to = params.page() * params.count();
                var filteredData = TableData.cache.result.slice(from, to);

                params.total(TableData.cache.total);
                $defer.resolve(filteredData);
            }

        }
    };

    return TableData;

});



