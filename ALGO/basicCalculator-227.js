/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // process * and /
  s = s.replace(/\s/ig, '');
  let idx = 0;
  while (idx < s.length-1) {
    if (s[idx] === '*') {
      s = s.replace(`${s[idx-1]}*${s[idx+1]}`, s[idx-1]*s[idx+1]);
    } else if (s[idx] === '/') {
      s = s.replace(`${s[idx-1]}/${s[idx+1]}`, Math.floor(s[idx-1]/s[idx+1]));
    }
    idx++;
  }

  idx = 0;
  while (idx < s.length-1) {
    if (s[idx] === '+') {
      s = s.replace(`${s[idx-1]}+${s[idx+1]}`, s[idx-1]*1+s[idx+1]*1);
    } else if (s[idx] === '-') {
      s = s.replace(`${s[idx-1]}-${s[idx+1]}`, s[idx-1]*1-s[idx+1]*1);
    }
    console.log('#### s = ', s);
    idx++;
  }

  return s;
};

s = '2+3*7/2+5-1'

console.log(calculate(s));
