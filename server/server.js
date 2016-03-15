//module require
var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var fs = require('fs');
var url = require('url');

var app = express();
app.use(bodyParser());

var options = {
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt')
}

//login post deal way
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
  setTimeout(function() {
    res.end(response);
  }, 3000);
  console.log(req.body);
});

//just test get way
app.get('/v2/test', function(req, res){
  res.status(200);
  res.send('<h1>dx is a great man!</h1>')
  console.log('get test success');
});

//send logs
app.get('/v2/logs', function(req, res){
  fs.readFile('data/logs.json', 'utf-8', function (err, data) {
     if (err) {
         return console.error(err);
     }
      res.status(200);
      var jsonObj = JSON.parse(data);
     res.json(jsonObj);
     console.log(jsonObj);
  });
});

//send update info
app.get('/v2/settings/upgrade', function(req, res){
  fs.readFile('data/upgrade.json', 'utf-8', function (err, data) {
     if (err) {
         return console.error(err);
     }
      res.status(200);
      var jsonObj = JSON.parse(data);
      setTimeout(function() {
        res.json(jsonObj);
      }, 100);
     console.log(jsonObj);
  });
});

//send repositories info
app.get('/v2/repositories', function(req, res){
  fs.readFile('data/repositories.json', 'utf-8', function (err, data) {
     if (err) {
         return console.error(err);
     }
      res.status(200);
      var jsonObj = JSON.parse(data);
      setTimeout(function() {
        res.json(jsonObj);
      }, 10);
     console.log(jsonObj);
  });
});

//https support listen 9006
https.createServer(options, app).listen(9006, function() {
    console.log('https server started successfully.');
});

//http port listen 9005
app.listen(9005);
