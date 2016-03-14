'use strict';

angular.module('registryUiApp').directive('csNavSelect', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $route){
            $element.on('click', function(){
                $element.siblings('.active').removeClass('active'); 
                $element.addClass('active');
            });
        }
    }
});