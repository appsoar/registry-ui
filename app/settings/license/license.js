'use strict';

angular.module('registryUiApp').controller('LicenseController', function(Upload, $timeout){
    var vm = this;
    vm.licenseId = 'M20EMC1kofvtxsdH03KnqxDm9chQrnpAyRgcOlv7u63w';

        // upload on file select or drop
    vm.upload = function (file) {
        Upload.upload({
            url: 'v2/settings/license',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ');
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

});