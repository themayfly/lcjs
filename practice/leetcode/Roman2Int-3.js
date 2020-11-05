/**
 * @param {string} s
 * @return {number}
 */
const romanMap = {
  "CM": 900,
  "M":  1000,
  "CD": 400,
  "D":  500,
  "CL":  90,
  "C":  100,
  "XL":  40,
  "L":   50,
  "IX":   9,
  "X":   10,
  "IV":   4,
  "V":    5,
  "I":    1
 };

var romanToInt = function(s) {
    for (let key in romanMap) {
        let intValue = romanMap[key];
        if (s.match(key)) {
            s = s.replace(new RegExp(key, 'g'), `|${intValue}|`);
        }
    }
    console.log('s = ', s)
    let sum = s.split(/\|/).filter(el => el).reduce((acc, cur) => (1*acc + 1*cur));
    return sum;
};


console.log(romanToInt('IV'))
