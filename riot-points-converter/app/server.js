/* Responsible for confiuring server and routes */

const express = require('express');
const app = express();
const converter = require('./converter');

app.get('/', (req, res) => {
  res.send('Welcome to Riot Points Converter!');
});

// Route to convert RiotPoints to USD
app.get('/rpToUsd', (req, res) => {
  // host.com/myPath?variableName=value&foo=anotherValue
  let riotPoints = parseInt(req.query.rp);
  let usd = converter.rpToUsd(riotPoints);

  let response = usd.toString();
  res.send(response);
});

// Route to convert USD to RiotPoints
app.get('/usdToRp', (req, res) => {
  let usd = parseInt(req.query.usd);
  let riotPoints = converter.usdToRp(usd);

  let response = riotPoints.toString();
  res.send(response);
});

app.listen(9001, () => {
  console.log('Node app is running on http://localhost:9001');
});
