const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;

const request = require('request');

const app = express();
const protodir = __dirname;
app.use(require('body-parser').json());
app.use(express.static(protodir + '/public'));
app.use('/lib', express.static(protodir + '/lib'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/api/query",function(req,res){
  console.log(req.body);
  request.post(req.body.url,{json:true,body:JSON.parse(req.body.data)},function(err,resEs,body){
    if(err){
      console.log(err);
    }
    res.send(body);
  });
})

app.listen(SERVER_PORT, ()  => {
  console.log('server is up on port '+SERVER_PORT);
});
