var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var fs = require('fs');
var url = require('url');
var app = express();
var options = {
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt')
}
app.use(bodyParser());
app.post('/v2/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  var response = '';
  console.log('username:'+ username);
  console.log('password:'+ password);
  if(username === 'dx' && password === '123'){
    res.status(200);
    response = 'auth success';
  }else{
    res.status(401);
    response = 'username or password error';
  }
  res.end(response);
  console.log(req.body);
});
app.get('/v2/test', function(req, res){
  res.status(200);
  res.send('<h1>dx is a great man!</h1>')
  console.log('get test success');
});

https.createServer(options, app).listen(9006, function() {
    console.log('https server started successfully.');
});
app.listen(9005);

