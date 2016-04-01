/**
 * Created by liwei on 2016/3/25.
 */
'use strict';

var ugApp = angular.module('registryUiApp');

ugApp.controller('usergroupsCtrl', ['$scope', '$filter', '$resource', '$timeout', '$state','userGroupListService',
    function ($scope, $filter, $resource, $timeout, $state, userGroupListService) {
        var vm = this;

        vm.selectNamespace = [
            { name: 'Namespace1', value: 'Namespace1' },
            { name: 'Namespace2', value: 'Namespace2' },
            { name: 'Namespace3', value: 'Namespace3' },
            { name: 'Namespace4', value: 'Namespace4' },
            { name: 'Namespace5', value: 'Namespace5' },
            { name: 'Namespace6', value: 'Namespace6' }
        ];
        vm.selected = '';

        vm.namespaceSelectChange = function(){
            vm.paginationConf.currentPage = 1;
            vm.resort();
        };




        vm.title = {
            usergroup: 'usergroup',
            uasenum: 'uasenum',
            namespace: 'namespace',
            desc: 'desc'
        }

        vm.titleName = {
            usergroup: '用户组',
            uasenum: '用户数',
            namespace: '命名空间',
            desc: '描述'
        }
        //first order by image desc
        vm.current = {
            label: vm.title.usergroup,
            desc: true
        }

        vm.paginationConf = {
            currentPage: 1,
            totalItems: 0,
            itemsPerPage: 10,
            pagesLength: 15,
            onChange: function(){
            }
        };

        //加载数据
        vm.usergrouplist = [];
        /*
        userGroupListService.query({}).$promise.then(function(value, responseHeaders){

            var orderparm = '+' + vm.current.label;
            if(!vm.current.desc)
                var orderparm = '-' + vm.current.label;

            var orderedData = [];
            if(vm.selected)
                orderedData = $filter('filter')(value, vm.selected);
            else
                orderedData = value;
            vm.paginationConf.totalItems = orderedData.length;
             orderedData = $filter('orderBy')(orderedData, orderparm);


            orderedData=orderedData.slice((vm.paginationConf.currentPage - 1) * vm.paginationConf.itemsPerPage, vm.paginationConf.currentPage * vm.paginationConf.itemsPerPage);


            angular.forEach(orderedData, function(item){
                vm.usergrouplist.push({
                    usergroup:item.usergroup,
                    uasenum:item.uasenum,
                    namespace:item.namespace,
                    desc:item.desc
                });
            });
        },function(){ });
        */
        //排序
        vm.resort = function() {
            userGroupListService.query({}).$promise.then(function(value, responseHeaders){

                var orderparm = '+' + vm.current.label;
                if(!vm.current.desc)
                    var orderparm = '-' + vm.current.label;

                var orderedData = [];
                if(vm.selected != null)
                    orderedData = $filter('filter')(value, vm.selected);
                else {
                    orderedData = value;
                }
                vm.paginationConf.totalItems = orderedData.length;

                 orderedData = $filter('orderBy')(orderedData, orderparm);

                orderedData=orderedData.slice((vm.paginationConf.currentPage - 1) * vm.paginationConf.itemsPerPage, vm.paginationConf.currentPage * vm.paginationConf.itemsPerPage);
                vm.usergrouplist=[];
                angular.forEach(orderedData, function(item){
                    vm.usergrouplist.push({
                        usergroup:item.usergroup,
                        uasenum:item.uasenum,
                        namespace:item.namespace,
                        desc:item.desc
                    });
                });
            },function(){ });
        };

        //页码发生变化时，监控数据的变化
        $scope.$watch('vm.paginationConf.currentPage', vm.resort);


        vm.Delete = function(usergroupid){

        };








        /*

        var data = [{usergroup: "usergroup1", uasenum: 50,namespace:"namespace1",desc:"用户组1描述信息"},
            {usergroup: "usergroup2", uasenum: 50,namespace:"namespace1",desc:"用户组2描述信息"},
            {usergroup: "usergroup3", uasenum: 50,namespace:"namespace1",desc:"用户组3描述信息"},
            {usergroup: "usergroup4", uasenum: 50,namespace:"namespace1",desc:"用户组4描述信息"},
            {usergroup: "usergroup5", uasenum: 50,namespace:"namespace2",desc:"用户组5描述信息"},
            {usergroup: "usergroup6", uasenum: 50,namespace:"namespace2",desc:"用户组6描述信息"},
            {usergroup: "usergroup7", uasenum: 50,namespace:"namespace2",desc:"用户组7描述信息"},
            {usergroup: "usergroup8", uasenum: 50,namespace:"namespace2",desc:"用户组8描述信息"},
            {usergroup: "usergroup9", uasenum: 50,namespace:"namespace3",desc:"用户组9描述信息"},
            {usergroup: "usergroup10", uasenum: 50,namespace:"namespace3",desc:"用户组10描述信息"},
            {usergroup: "usergroup11", uasenum: 50,namespace:"namespace3",desc:"用户组11描述信息"},
            {usergroup: "usergroup12", uasenum: 50,namespace:"namespace4",desc:"用户组12描述信息"},
            {usergroup: "usergroup13", uasenum: 50,namespace:"namespace4",desc:"用户组13描述信息"},
            {usergroup: "usergroup14", uasenum: 50,namespace:"namespace4",desc:"用户组14描述信息"},
            {usergroup: "usergroup15", uasenum: 50,namespace:"namespace4",desc:"用户组15描述信息"},
            {usergroup: "usergroup16", uasenum: 50,namespace:"namespace4",desc:"用户组16描述信息"},
            {usergroup: "usergroup17", uasenum: 50,namespace:"namespace4",desc:"用户组17描述信息"},
            {usergroup: "usergroup18", uasenum: 50,namespace:"namespace4",desc:"用户组18描述信息"},
            {usergroup: "usergroup19", uasenum: 50,namespace:"namespace4",desc:"用户组19描述信息"},
            {usergroup: "usergroup20", uasenum: 50,namespace:"namespace5",desc:"用户组20描述信息"},
        ];


        vm.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                usergroup: 'asc'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {

                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
console.log(params.orderBy())
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

        */





    }]);

ugApp.controller('usergroupEditCtrl', ['$scope', '$filter', 'ngTableParams', '$resource', '$timeout', '$state','ngDialog',
    function ($scope, $filter, ngTableParams, $resource, $timeout, $state,ngDialog) {
        var vm =this;
        vm.users=[];

        vm.addUser = function(){
            var num = Math.floor(Math.random()*10+60);
            var obj ={ID:num,Name:'User Name '+num};
            vm.users.push(obj);
        }

        vm.removeUser = function(idx){
            vm.users.splice(idx,1);
            //console.log(vm.users.length)
        }

        vm.openConfirm = function () {


            ngDialog.open({
                template: 'users/usergroup/selectuser.html',
                controller: ['$scope', '$timeout', function ($scope, $timeout) {
                    var list =[];
                    $scope.users=list;

                    for(var i =0 ;i<10;i++){
                        var num = parseInt(Math.random()*100 +1);
                        var count=0;

                        if(vm.users.length>0){

                            for(var j=0;j<vm.users.length;j++)
                            {

                                if(vm.users[j].ID.toString()==num.toString()){
                                    count+=1;
                                    break;
                                }
                            }
                        }


                        if(count > 0)continue;

                        var obj ={ID:num,Name:'User Name '+num};
                        $scope.users.push(obj);
                    }



                    $scope.selectOK = function(){
                        if($scope.users.length>0){
                            for(var i =0; i<$scope.users.length;i++){
                                vm.users.push($scope.users[i]);
                            }
                        }
                        $scope.closeThisDialog('button');
                    };
                }],
                className: 'ngdialog-theme-default'
            });
        };

    }]);

ugApp.controller('usergroupViewCtrl', ['$scope', '$resource',
    function ($scope, $resource) {
        var vm =this;

        //{usergroup: "usergroup2", uasenum: 50,namespace:"namespace1",desc:"用户组2描述信息"}
        vm.usergroup = '测试用户组名';
        vm.namespace = '测试命令空间';
        vm.desc = '用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息用户组描述信息';

        vm.users = [];
        for(var i =0 ;i<10;i++){
            var num = parseInt(Math.random()*100 +1);

            var obj ={ID:num,Name:'User Name '+num};
            vm.users.push(obj);
        }
    }]);

