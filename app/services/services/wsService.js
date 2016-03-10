'use strict'

angular.module('registryUiApp').factory('wsService', function($websocket, wsUrl) {
      // Open a WebSocket connection
      var ws = $websocket(wsUrl);

      var collection = [] ;
      ws.onError(function (event) {
          console.error('connection Error', event);
      });
      ws.onClose(function (event) {
          console.log('connection closed', event);
      });
      ws.onOpen(function () {
          console.log('connection open');
      });
// {"cpuUsage":12,"totalRam":1833,"availableRam":741,"totalDisk":38345,"availableDisk":1569}
      ws.onMessage(function(event) {
        // console.log('message: ', event.data);
        var response;
        try {
            response = angular.fromJson(event.data);
            // console.log(response);
        } catch (e) {
            console.log('error: ', e);
            response = {'error': e};
        }
        // collecton[0] = response;

            collection[0]= response.cpuUsage;
            collection[1]= response.availableRam;
            collection[2]= response.totalRam;
            collection[3]= response.availableDisk;
            collection[4] = response.totalDisk;

      });
      return {
        collection: collection,
        status: function () {
            return ws.readyState;
        },
        send: function (message) {
            if (angular.isString(message)) {
                ws.send(message);
            }
            else if (angular.isObject(message)) {
                ws.send(JSON.stringify(message));
            }
        }
    };
  }); 