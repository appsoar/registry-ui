'use strict';

angular.module('registryUiApp').directive('csNavtagSw', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $route){
            $element.on('click', function(){
                // $scope.currentTag = $element.index();
                $('.nav-tags-bar').css({ 'left':$scope.currentTab*120 + 'px'});
                $element.siblings('.active').removeClass('active');
                $element.addClass('active');
            });
        }
    }
});