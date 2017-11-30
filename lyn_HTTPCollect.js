const http = require('http');
const bl = require('bl');
let urlPath = process.argv[2];

// console.log(urlPath)

http.get(urlPath, function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})