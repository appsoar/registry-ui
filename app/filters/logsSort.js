'use strict';

angular.module('registryUiApp').filter('logsSort', function(){
    return function(input, dateStart, dateEnd) {
      var out = [];
      if(dateEnd && dateStart ){
          angular.forEach(input, function(log){ 
              var date = new Date(log.time.replace(/-/g,"/"));
              if(date>=dateStart && date<=dateEnd){
                  out.push(log);
              }
              console.log('dx');
          });
          return out;
      }else{
          return input;
      }
    };
});

