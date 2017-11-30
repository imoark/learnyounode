var fs = require('fs');
var path = require('path');
	
var filename = process.argv[2];
var fileExtension = process.argv[3];

// console.log(fileExtension);

fs.readdir(filename, function callback(err, list){
	if(err){
		console.log('error');
	}

	list.forEach(function (file){
		if (path.extname(file) === '.' + fileExtension)

		console.log(file);
	});


});
// contents = file.toString();


/* OFFICIAL SOLUTION*/

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
