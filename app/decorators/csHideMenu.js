'use strict';

angular.module('registryUiApp').directive('csHideMenu', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $route){
            $element.on('click', function(){
                $('cs-image-menu').css({'display':'none' , 'z-index': -1});
            });
        }
    }
});