var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();
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
});
app.listen(9005);

