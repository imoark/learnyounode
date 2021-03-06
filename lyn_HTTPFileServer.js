const http = require('http');
const fs = require('fs');

let port = process.argv[2];
let fileLocation = process.argv[3];

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(fileLocation).pipe(res)
})

server.listen(Number(port))