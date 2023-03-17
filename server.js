const express = require('express');
const app = express();
const os = require('os');

const networkInterfaces = os.networkInterfaces();
const firstNetworkInterface = networkInterfaces[Object.keys(networkInterfaces)[0]];
const ipAddress = firstNetworkInterface.find(interface => interface.family === 'IPv4').address;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log(`IP address: ${ipAddress}`);
});