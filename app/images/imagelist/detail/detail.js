'use strict';

angular.module('registryUiApp').controller('ImageDetailController', function($scope, $location, $state, ImageDetail){
    //path[2]=>namespace path[3]=>reponame path[4]=>tag
    var path = $location.path().split('/');
    ImageDetail.query({
        namespace:path[2],
        reponame: path[3]
    }).$promise.then(function(value){
            $scope.image = value;
    },function(){});

    ImageDetail.tag({
        namespace:path[2],
        reponame: path[3],
        tag: path[4]
    }).$promise.then(function(value){
            $scope.tag = value;
            $scope.currentTag = value.tag_name;
    },function(){});

    $scope.currentTab = 0;
    $scope.changeTab = function(index){
        $scope.currentTab = index;
    };

    $scope.showMenu = function(e){
        $('.popup-menu').removeClass('popup-menu');
        $(e.target).addClass('popup-menu');
        e.stopPropagation();
        $('cs-image-menu').css({'top':$('.popup-menu').offset().top+15, 'left':$('.popup-menu').offset().left - 70 , 'display':'block' , 'z-index': 2});
    };

    $scope.changeTag = function(){
            // $location.url('/home/images/'+path[2] + '/' + path[3] + '/' + $scope.currentTag);
            $state.go('home.images.detail', {namespace: path[2], reponame: path[3], tag: $scope.currentTag});
            // ImageDetail.tag({
            //     namespace:path[2],
            //     reponame: path[3],
            //     tag: path[4]
            // }).$promise.then(function(value){
            //         $scope.tag = value;
            //         $scope.currentTag = value.tag_name;
            //         console.log($scope.tag);
            // },function(){});
    }
    // $scope.htmlContent = '';
}).filter('imageSize', function(){
    return function(input){
       var out= 0;
       if(isNaN(input)){
          return '0';
       }
       var kb = 1024;
       var mb = kb*1024;
       var gb = mb*1024;
       if (input >= gb) {
            out = (input/gb).toFixed(1) + ' GB';
       } else if (input >= mb) {
            out= (input / mb).toFixed(1) + ' MB';
       } else if(input >= kb) {
            out= (input / kb).toFixed(1) + ' KB';
      }else{
            out = input +  ' B';
      }
      return out;
    }
});