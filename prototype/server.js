const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
const protodir = __dirname;

app.use(express.static(protodir + '/public'));
app.use('/lib', express.static(protodir + '/lib'));

app.listen(SERVER_PORT, ()  => {
  console.log('server is up on port 3000');
});
