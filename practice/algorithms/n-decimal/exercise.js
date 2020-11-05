const DIGITS = '0123456789abcdef';
function convert(num, n) {
  let list = [];
  let target = num;
  while (target > 0) {
    let div = Math.floor(target / n);
    let mod = target % n;
    list.push(DIGITS[mod]);
    target = div;
  }
  console.log([...list].reverse().join(''));
}

convert(44, 16);
