/**
 * Created by liwei on 2016/3/25.
 */
var userApp = angular.module('registryUiApp');

userApp.controller('usersCtrl', ['$scope', '$filter', '$resource', '$timeout', '$state','userListService',
    function ($scope, $filter, $resource, $timeout, $state,userListService) {
        var vm =this;

        vm.selectUserGroup = [
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
            { name: '6', value: '6' }
        ];

        vm.selected = '';

        vm.userGoupSelectChange = function(){
            vm.paginationConf.currentPage = 1;
            vm.resort();
        };

        vm.title = {
            userid: 'userid',
            usergroupnum: 'usergroupnum',
            desc: 'desc'
        }

        vm.titleName = {
            userid: '用户',
            usergroupnum: '用户组数',
            desc: '描述'
        }
        //first order by image desc
        vm.current = {
            label: vm.title.userid,
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

        vm.userlist = [];
        vm.resort = function() {
            userListService.query({}).$promise.then(function(value, responseHeaders){
                console.log(value)
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
                vm.userlist=[];
                angular.forEach(orderedData, function(item){
                    vm.userlist.push({
                        userid:item.userid,
                        usergroupnum:item.usergroupnum,
                        desc:item.desc
                    });
                });
            },function(){ });
        };

        //页码发生变化时，监控数据的变化
        $scope.$watch('vm.paginationConf.currentPage', vm.resort);


    }]);


userApp.controller('userEditCtrl', ['$scope', '$filter', '$resource', '$timeout', '$state',
    function ($scope, $filter, $resource, $timeout, $state) {

    }]);


userApp.controller('userViewCtrl', ['$scope', '$resource',
    function ($scope, $resource) {
        var vm = this;
    }]);
