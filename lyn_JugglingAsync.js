const http = require('http');
const bl = require('bl');
let num = 0;
let array = [];

function collectContent (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      array[index] = data.toString()
      num++

      if (num === 3) {
        for (let i = 0; i < 3; i++) {
		    console.log(array[i])
		  }
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  collectContent(i)
}

/// ACTUAL SOLUTION

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }