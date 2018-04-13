/* Start up a Node server and return "Hello World" to anyone visiting our local URL. */

const http = require('http');

const hostname = 'localhost';
const port = 2000;

// Equivalent in ES5 syntax:
// const server = http.createServer(function (request, response) { ... })
const server = http.createServer((request, response) => {
  // response obect has three required components:
  // - status code
  // - content type
  // - response body

  response.statusCode = 200; // HTTP status for OK
  // 401 - unauthorized
  // 201 - success, no content (for example, when you create something new)
  // 400 - bad request (server was expecting different input value than provided)
  // 500 - internal server error (unknown)

  response.setHeader('Content-Type', 'text/plain'); // another common type 'application/json'

  response.end('Hello World!');
});

server.listen(port, hostname, () => {
  // console.log('Great success! Running on localhost port ' + port);
  // console.log(`Great success! Running on localhost port ${port}`); using backticks `` instead of quotes ''
  console.log('Great success! Running on localhost port', port);
});
