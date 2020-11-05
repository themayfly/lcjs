/**
 * @param {string} s
 * @return {boolean}
 */
var pair = {
  '{': '}',
  '(': ')',
  '[': ']'
};
var isValid = function(s) {
  if (!s) {
      return true;
  }
  var arr = [...s];
  if (arr.length % 2 !== 0) {
    return false;
  }
  function evaluate(arr) {
      var valid = true;
      var target = arr.shift();
      if (pair[target] === arr[0]) {
          arr.shift();
          if (arr.length === 0) {
            return;
          }
          evaluate(arr);
      } else if (pair[target] === arr[arr.length-1]) {
          arr.pop();
          if (arr.length === 0) {
            return;
          }
          evaluate(arr);
      } else if (pair[target]) {

      } else {
          return;
      }
  }

  evaluate(arr);
  return arr.length === 0;
};


console.log(isValid('()'));