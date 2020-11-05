const DIGITS = '0123456789ABCDEF';
const list = [];

function convert(num, n) {
  let target = num;
  let div = Math.floor(target / n);
  let mod = target % n;
  // console.log(list);
  console.log('#### num=%s, div=%s, mod=%s', num, div, mod)
  if (div === 0) {
    list.push(DIGITS[mod]);
    return;
  } else {
    list.push(DIGITS[div]);
  }
  convert(div, n);
}


convert(40, 16);
console.log('#### list = ', list)
