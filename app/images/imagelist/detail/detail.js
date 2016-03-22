'use strict';

angular.module('registryUiApp').controller('ImageDetailController', function($scope){
    var vm = this;
    $scope.currentTag = 0;
    $scope.changeTag = function(index){
        $scope.currentTag = index;
    };

    vm.showMenu = function(e){
        $('.popup-menu').removeClass('popup-menu');
        $(e.target).addClass('popup-menu');
        e.stopPropagation();
        $('cs-image-menu').css({'top':$('.popup-menu').offset().top+15, 'left':$('.popup-menu').offset().left - 70 , 'display':'block' , 'z-index': 2});
    };

    $scope.htmlContent = '';
});