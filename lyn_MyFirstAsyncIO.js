var fs = require('fs');
var filename = process.argv[2];

// console.log(filename);

fs.readFile(filename, function callback(err, data){
	if(err){
		console.log('error');
	}

	console.log(data);

	var contents = data.toString();

	console.log(contents);

	console.log(contents.split('\n').length - 1);	
});


// contents = file.toString();


/* OFFICIAL SOLUTION*/

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
// if (err) {
// return console.log(err)
// }
// // fs.readFile(file, 'utf8', callback) can also be used
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
// })
