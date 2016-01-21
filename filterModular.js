var myFilter = require('./modular.js');

myFilter(process.argv[2], process.argv[3], function(err, list) {
  if(err) {
    return "There was an error"
  }
  list.forEach(function(file){
    console.log(file);
  })
})
