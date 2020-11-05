input = [2,5,9,6,3,4,8,15,12]

output = [3,6,12,8,4,8,12,15,12]

var doIt = function(input) {
  let result = input.map((el, idx) => {
    return getNextBigger(input, idx, el);
  })
  console.log(result);
  return result;
}

var getNextBigger = function(arr, idx, value) {
  let sorted = arr.slice(idx).sort((a, b) => {
    return a === b ? 0 : a > b;
  });
  for (let i=0; i<sorted.length; i++) {
    if (value < sorted[i]) {
      return sorted[i];
    }
  }
  return value;
}

doIt(input)