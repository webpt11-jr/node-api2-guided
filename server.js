const express = require('express');
const server = express();
const Hubs = require('./hubs/hubs-model.js');

server.use(express.json());

// endpoints
server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Hubs API</h>
      <p>Welcome to the Lambda Hubs API</p>
    `);
  });

module.exports = server;