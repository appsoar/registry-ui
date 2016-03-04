var http = require('http');
var server = http.createServer();
var handleReq = function (req, res){
  res.writeHead(401, {});
  res.end('login success');
};

server.on('request', handleReq);
server.listen(9999);