'use strict';
angular.module('registryUiApp').controller('ImagelistController',  function( Repository, Namespace){
    var vm = this;
    //the image table title, no operation option
    vm.title = {
        image: 'image',
        permission: 'permission',
        version: 'version',
        pushDate: 'pushDate',
        pullNum: 'pullNum',
        namespace: 'namespace'
    }

    vm.titleName = {
        image: '镜像',
        permission: '属性',
        version: '版本',
        pushDate: '提交时间',
        pullNum: '拉取次数',
        namespace: '命名空间'
    }
    //first order by image desc
    vm.current = {
        label: vm.title.image,
        desc: true
    }
    //search init function
    var searchInit = function(){
        vm.search = {
            searchByImage: null,
            searchByPermission: null,
            searchByNamespace: null
        };
      vm.permissionType = '属性类型: ';
      vm.namespace = '命名空间: ';
    };

    //search init set
    searchInit();

    Repository.query({}).$promise.then(function(value, responseHeaders){
        vm.repositories = value.repositories;
        vm.showTag = value.tag;
    },function(){ });

    Namespace.query({}).$promise.then(function(value, responseHeaders){
        vm.permission = value.permission;
        vm.namespaces = value.namespaces;
    },function(){

    });

    //if order or search, resort should be invoked
    vm.resort = function() {
        //set resort keywords(vm.search and vm.current) and ask data from backend ,order by current . March version should not think about this.
        //to do
        Repository.query({}).$promise.then(function(value, responseHeaders){
            vm.repositories = value.repositories;
            vm.showTag = value.tag;
        },function(){ });
        toastr.warning('Sort by:' + vm.current.label + '  ,desc:' + vm.current.desc ,'Sort API not yet completed');
    };


    vm.searchByPermission = function(item) {
        vm.permissionType = item + ' ';
    };
    vm.searchByNamespace = function(item) {
        vm.namespace = item + ' ';
    };


    vm.doClear = function(){
        searchInit();
    };

    vm.showMenu = function(e , index){
        // this part should move to a directive, donot change dom in a controller
        // to do
        $('.popup-menu').removeClass('popup-menu');
        $(e.target).addClass('popup-menu');
        e.stopPropagation();
        $('cs-image-menu').css({'top':$('.popup-menu').offset().top+15, 'left':$('.popup-menu').offset().left - 70 , 'display':'block' , 'z-index': 2});
        // make image and version point to current operation object
        vm.selectImage = vm.repositories[index];
        vm.selectTag = vm.showTag[index];
    };
  });
