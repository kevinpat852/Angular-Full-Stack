const express = require('express');
const http = require('http');
const app = express();
const user = require('./users');
const data = require('./data');
const feedback = require('./feedback');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/users', user);
app.use('/data', data);
app.use('/feed', feedback);

const port = process.env.PORT || 3000;

app.set('port', port);

console.log('Server is up and running!');

const server = http.createServer(app);

server.listen(port);
