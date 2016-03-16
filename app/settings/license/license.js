'use strict';

angular.module('registryUiApp').controller('LicenseController', function($scope, $fileUploader){
    var vm = this;
    vm.licenseId = 'M20EMC1kofvtxsdH03KnqxDm9chQrnpAyRgcOlv7u63w';

    vm.uploader = $fileUploader.create({
    scope: $scope,
    url: '/api/upload',
    autoUpload: true,   // 自动开始上传
    formData: [          // 和文件内容同时上传的form参数
      { key: 'value' }
    ],
    filters: [           // 过滤器，可以对每个文件进行处理
      function (item) {
        console.info('filter1', item);
        return true;
      }
    ]
  });

});