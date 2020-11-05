/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  // I can be placed before V (5) and X (10) to make 4 and 9.
  // X can be placed before L (50) and C (100) to make 40 and 90.
  // C can be placed before D (500) and M (1000) to make 400 and 900.
  var map = {
      'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90,
      'CD': 400, 'CM': 900,
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };
  const list = [];
  for (var key in map) {
    if (s.match(key)) {
      s = s.replace(new RegExp(key, 'g'), `[${map[key]}]`);
    }
  }
  return s.split(/\[|\]/).filter(el => el).map(el => el*1).reduce((sum, cur) => (sum+cur));
};

console.log('#### romanToInt MMMDCCXXIV = ', romanToInt('MMMDCCXXIV'))
console.log('#### romanToInt IV = ', romanToInt('IV'))
