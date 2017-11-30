const filterName = require('./program6module.js');
const dir = process.argv[2];
const fileExtName = process.argv[3];

// console.log(fileExtName)

filterName(dir, fileExtName, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})