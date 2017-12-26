import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import request from 'request';

/* eslint-disable no-console */

const SERVER_PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(require('body-parser').json());
app.post('/api/query', function(req,res){
  console.log(req.body);
  request.post(req.body.url,
    { json:true,
      body:JSON.parse(req.body.data)
    },
    function(err,resEs,body){
      if(err){
        console.log(err);
        res.send(err);
      }
      res.send(body);
    });
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(SERVER_PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started at port ${SERVER_PORT}`);
  }
});
