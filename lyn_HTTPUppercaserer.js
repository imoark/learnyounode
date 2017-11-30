const http = require('http')
const map = require('through2-map')
let portNumber = Number(process.argv[2]);

const server = http.createServer(function (inStream, ourStream) {
  if (inStream.method !== 'POST') {
    return ourStream.end('send me a POST\n')
  }

  inStream.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(ourStream)
})

server.listen(portNumber)


// ACTUAL SOLUTION

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))