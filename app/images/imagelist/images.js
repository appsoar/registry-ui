'use strict';
angular.module('registryUiApp').controller('ImagelistController',  function( Repository){
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
    //first order by image desc
    vm.current = {
        label: vm.title.image,
        desc: true
    }

    var searchInit = function(){
        vm.search = {
            searchByImage: null,
            searchByPermission: null,
            searchByNamespace: null
        };
      vm.permissionType = 'Permission Type: ';
      vm.namespace = 'Namespace: ';
    };

    //just for test
    vm.items = ['asef','asdf','sdfad','sdfa','sdfsa', '23r34r','wr3w4'];
    //search set
    searchInit();
    vm.showTag = [];
    Repository.query({}).$promise.then(function(value, responseHeaders){
        vm.repositories = value.repositories;
        vm.showTag = value.tag;
    },function(){
      //tips: code in here exec after interceptors
      // toastr.error('error code: 404', 'message');
    });


    vm.resort = function() {
        console.log(vm.current);
        //ask data from backend ,order by current
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
    vm.doSearch = function(){
        
    };
    vm.showMenu = function(e){
        $('.popup-menu').removeClass('popup-menu');
        $(e.target).addClass('popup-menu');
        e.stopPropagation();
        $('cs-image-menu').css({'top':$('.popup-menu').offset().top+15, 'left':$('.popup-menu').offset().left - 70 , 'display':'block' , 'z-index': 2});
    };
    vm.selectValue = function(){

    };

  });
