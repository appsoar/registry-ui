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
      ws.onMessage(function(event) {
        // var response;
        try {
            collection[0] = angular.fromJson(event.data);
            // console.log(collection);
        } catch (e) {
            console.log('error: ', e);
            // response = {'error': e};
        }
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