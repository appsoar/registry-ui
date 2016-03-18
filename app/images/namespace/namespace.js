/**
 * Created by liwei on 2016/3/18.
 */
'use strict';

var namespaceApp = angular.module('registryUiApp');

namespaceApp.controller('namespaceCtrl', ['$scope', '$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService', function($scope, $filter, ngTableParams, $resource, $timeout, ngTableDataService) {
    var vm = this;



    // AJAX

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



