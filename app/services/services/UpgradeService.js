'use strict';

angular.module('registryUiApp').factory('UpgradeService', function($resource){
  // return $resource('/data/upgrade.json', {}, {
  return $resource('/api/settings/upgrade', {}, {
      'query': {
        method: 'GET',
        isArray: false,
        transformResponse: function(data){
            var version = {};
            try{
                var temp = angular.fromJson(data);
                version.currentVersion = temp.currentVersion;
                version.newVersion = temp.newVersion;
                version.upgradeAvailable = temp.upgradeAvailable;
            }catch(e){
                console.log(e);         
            }
            return version;
        }
      }
  })
}); 