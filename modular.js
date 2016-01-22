var fs = require('fs');
var path = require('path');

function filter(pathName, extension, callback) {
  fs.readdir(pathName, function(err, list) {
    if(err) {
      return callback(err);
    }

    // var result = [];

    // list.forEach(function(file) {
    //   if (path.extname(file) === '.' + extension) {
    //     result.push(file)
    //   }


    // });

    var result = list.filter(function(file) {
      return path.extname(file) === '.' + extension
    })

    callback(err, result)
  });
}

module.exports = filter;
