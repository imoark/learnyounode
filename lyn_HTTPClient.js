const http = require('http');
let webPath = process.argv[2];

http.get(webPath, function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)