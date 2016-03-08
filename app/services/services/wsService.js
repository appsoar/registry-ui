'use strict'

angular.module('registryUiApp').factory('wsService', function($websocket, wsUrl) {
      // Open a WebSocket connection
      var ws = $websocket(wsUrl);

      var collection = [];
      ws.onError(function (event) {
          console.log('connection Error', event);
      });
      ws.onClose(function (event) {
          console.log('connection closed', event);
      });
      ws.onOpen(function () {
          console.log('connection open');
      });

      ws.onMessage(function(event) {
        console.log('message: ', event.data);
        var response;
        try {
            response = angular.fromJson(event.data);
        } catch (e) {
            console.log('error: ', e);
            response = {'error': e};
        }
       for (var i = 0; i < response.length; i++) {
          collection.push({
            //TODO here deal with real data
          });
       }
        // collection.push(JSON.parse(message.data));
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