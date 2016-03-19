//module require
var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
 var multiparty = require('multiparty');
 var util = require('util');
var fs = require('fs');
var url = require('url');

var app = express();
app.use(bodyParser());
// app.use(multiparty());

var options = {
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt')
}

//login post deal way
app.post('/api/v0/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  var response = '';
  console.log('username:'+ username);
  console.log('password:'+ password);
  if(username === 'dx' && password === '698b8f49d428a121a4bd6df908ca94d7'){
    res.status(200);
    response = 'auth success';
  }else{
    res.status(401);
    response = 'username or password error';
  }
  setTimeout(function() {
    res.end(response);
  }, 2000);
  console.log(req.body);
});

//just test get way
app.get('/api/v0/test', function(req, res){
  res.status(200);
  res.send('<h1>dx is a great man!</h1>')
  console.log('get test success');
});

//send logs
app.get('/api/v0/logs', function(req, res){
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
app.get('/api/v0/settings/upgrade', function(req, res){
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
app.get('/api/v0/repositories', function(req, res){
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

//upload license
app.post('/api/v0/settings/license', function(req, res){
  var form = new multiparty.Form({uploadDir: './upload'});
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files,null,2);

    if(err){
      console.log('parse error: ' + err);
    } else {
      console.log('parse files: ' + filesTmp);
      // var inputFile = files.inputFile[0];
      // var uploadedPath = inputFile.path;
      // var dstPath = './public/files/' + inputFile.originalFilename;
      // fs.rename(uploadedPath, dstPath, function(err) {
      //   if(err){
      //     console.log('rename error: ' + err);
      //   } else {
      //     console.log('rename ok');
      //   }
      // });
    }
    res.status(200);
    res.end('received file');
 });
});

app.get('/v2/tabledata', function(req, res){
    fs.readFile('data/table-data.json', 'utf-8', function (err, data) {
        if (err) {
            return console.error(err);
        }
        res.status(200);
        var jsonObj = JSON.parse(data);
        res.json(jsonObj);
        console.log(jsonObj);
    });
});
//https support listen 9006
https.createServer(options, app).listen(9006, function() {
    console.log('https server started successfully.');
});

//http port listen 9005
app.listen(9005);
