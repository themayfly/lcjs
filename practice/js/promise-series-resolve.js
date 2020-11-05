var _ = require('lodash');
var readFiles = function(files) {
  files.reduce((p, file) => {
    return p.then(() => readFile(file));
  }, Promise.resolve());
};

var readFile = function(file) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('#### file %s opened', file);
      resolve();
    }, 500);
  })
}



readFiles(_.range(1, 11))
