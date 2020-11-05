/**
 * @param {string} s
 * @return {number}
 */
var intToRoman = function(n) {

  // I can be placed before V (5) and X (10) to make 4 and 9.
  // X can be placed before L (50) and C (100) to make 40 and 90.
  // C can be placed before D (500) and M (1000) to make 400 and 900.
  var map = {
    'M' : 1000,
    'CM': 900,
    'D' : 500,
    'CD': 400,
    'C' : 100,
    'XC': 90,
    'L' : 50,
    'XL': 40,
    'X' : 10,
    'IX': 9,
    'V' : 5,
    'IV': 4,
    'I' : 1
  };
  let list = [];
  for (let key in map) {
    let value = map[key];
    if (n >= value) {
      let div = Math.floor(n / value);
      n = n - (div * value);
      for (let i=0;i<div;i++) {
        list.push(key);
      }
    }
  }
  return list.join('');
};



const dec2Roman = (input) => {
  let nums = [];
  for (let key in map) {
    let value = map[key];
    if (input >= value) {
      let div = Math.floor(input / value);
      input = input - (div * value);
      for (let count = 0; count < div; count++) {
        nums.push(key);
      }
      if (input === 0) {
        break;
      }
    }
  }
  return nums.join('');
 }


//'MMMDCCXXIV'
console.log('#### romanToInt = ', intToRoman(3724))
