/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  let num = '',
      list = [],
      prevSign = '+';// no effect dummy sign
  // insert into array
  for (let i=0; i<s.length; i++) {
    if (!isNaN(s[i])) {
      num += s[i];
    }
    if (isNaN(s[i]) || i === s.length-1) {
      if (prevSign === '+') {
        list.push(Number(num));
      } else if (prevSign === '-') {
        list.push(Number(-num));
      } else if (prevSign === '*') {
        list.push(list.pop()*num);
      } else if (prevSign === '/') {
        list.push(Math.trunc(list.pop()/num));
      }
      num = ''; // reset after push
      prevSign = s[i];
    }
  }
  return list.reduce((acc, cur) => acc + cur, 0);
};
console.log(calculate('11*-6'));
