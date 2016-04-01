/**
 * Created by liwei on 2016/3/24.
 */
'use strict'

angular.module('registryUiApp').factory('dashboardStatisticService', function($websocket, wsUrl) {
    // Open a WebSocket connection
    var ws = $websocket(wsUrl+'/api/v0/stats');
    var collection = [] ;
    ws.onError(function (event) {
        console.error('connection Error', event);
    });
    ws.onClose(function (event) {
        //console.log('connection closed', event);
    });
    ws.onOpen(function () {
        //console.log('connection open');
    });
    ws.onMessage(function(event) {
        // var response;
        try {
            collection[0] = angular.fromJson(event.data).content;
            //console.log(collection)
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
