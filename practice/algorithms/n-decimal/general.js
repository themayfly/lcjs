
const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 62 chars
const MAX = Math.pow(62, 11);
function convert(input, notation) {
  let digits = DIGITS.slice(0, notation);
  let results = [];
  while (input > 0) {
    let div = Math.floor(input / notation);
    let mod = input % notation;
    input = div;
    results.push(digits[mod]);
  }
  return results.reverse().join('');
}
console.log('#### convert results = ', convert(process.argv[2], process.argv[3]));


function convertRecursion(input, notation, results = []) {
  const digits = DIGITS.slice(0, notation);
  let div = Math.floor(input / notation);
  let mod = input % notation;
  results.push(digits[mod]);
  input = div;
  if (input > 0) {
    convertRecursion(input, notation, results);
    return;
  }
  console.log('#### result is ', results.reverse().join(''));
}

convertRecursion(process.argv[2], process.argv[3]);
