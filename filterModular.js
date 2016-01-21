var myFilter = require('./modular.js');
var pathName = process.argv[2];
var extension = process.argv[3];

myFilter(pathName, extension, function(err, list) {
  if(err) {
    console.error('There was an error:', err);
  }
  list.forEach(function(file){
    console.log(file);
  })
})
