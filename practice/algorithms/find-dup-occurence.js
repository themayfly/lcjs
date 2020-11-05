
var input = [1,2,3,4,5,6,6,7];
var findDupOccurrence = function(input = []) {
  var map = {},
      dupped = [];
  input.forEach(el => {
    if (el in map) {
      // dup
      dupped.push(el);
    } else {
      map[el] = el;
    }
  })
  return dupped;
};


console.log(findDupOccurrence(input))