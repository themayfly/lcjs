'use strict';

/**
  "M":  1000,
  "CM": 900,
  "D":  500,
  "CD": 400,
  "C":  100,
  "L":   50,
  "XL":  40,
  "X":   10,
  "IX":   9,
  "IIX":  8,
  "V":    5,
  "I":    1
 */


const romanMap = {
  "M":  1000,
  "CM": 900,
  "D":  500,
  "CD": 400,
  "C":  100,
  "CL":  90,
  "L":   50,
  "XL":  40,
  "X":   10,
  "IX":   9,
  "V":    5,
  "IV":   4,
  "I":    1
 };

const dec2Roman = (input) => {
  let nums = [];
  for (let key in romanMap) {
    let value = romanMap[key];
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

 console.log(dec2Roman(3724));
