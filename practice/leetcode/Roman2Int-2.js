

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

const isValidRoman = str => {
  return str.split('').every(ch => {
    return 'MDCLXVI'.indexOf(ch) > -1;
  });
};

const roman2Dec = (input) => {
  if (!isValidRoman(input)) {
    console.log('#### %s is not a valid roman number', input);
    return;
  }
  let nums = [];
  while (input) {
    for (let rom in romanMap) {
      if (input.startsWith(rom)) {
        nums.push(romanMap[rom]);
        input = input.replace(rom, '');
      }
    }
  }
  return nums.reduce((sum, inc) => {
    return sum + inc;
  });
 }
