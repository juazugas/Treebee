const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/lib'));

app.listen(SERVER_PORT, ()  => {
  console.log('server is up on port 3000');
});
