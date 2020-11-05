
function format(num, n) {

  const list = [];
  // const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const DIGITS = '0123456789ABCDEF';

  let target = num;
  while (target > 0) {
    let mod = target % n;
    let div = Math.floor(target / n);
    list.push(DIGITS[mod]);
    target = div;
  }
  // console.log('#### list = ', list)
  return [...list].reverse().join('');
}

console.log(format(20, 16))


