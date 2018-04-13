/* Start up a Node server and return "Hello World" to anyone visiting our local URL. */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log("It's working! It's working!");
});
