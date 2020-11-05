/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // remove empty space
  s = s.replace(/\s/g, '');
  let num = '',
      list = [];
  // trying remove ( and )
  for (let i=0; i<s.length; i++) {
    let ch = s[i];
    if (ch === ')') {
      // pop until ( and merge using calcString
      let temp = [];
      while (list.length) {
        let el = list.pop();
        if (el === '(') {
          break;
        }
        temp.unshift(el);
      }
      list.push(calcString(temp.join('')));
    } else {
      list.push(ch);
    }
  }
  return calcString(list.join(''));
};

// string w/o ( , )
var calcString = function(s) {
  console.log(s);
  let num = '',
      prevSign = '+',
      list = [];
  s = s.replace(/\-\-/g, '+')
  for (let i=0; i<s.length; i++) {
    if (!isNaN(s[i])) {
      num += s[i];
    }
    if (isNaN(s[i]) || i === s.length-1) {
      if (prevSign === '+') list.push(Number(num));
      else if (prevSign === '-') list.push(Number(-num));
      else if (prevSign === '*') list.push(list.pop() * Number(num));
      else if (prevSign === '/') list.push(Math.trunc(list.pop() / Number(num)));
      prevSign = s[i];
      num = '';
    }
  }
  console.log('#### result = ', list)
  return list.reduce((acc, cur) => acc + cur, 0);
}

// console.log(calculate("2*(5+5*2)/3+(6/2+8)"));
// console.log(calculate("2-(5-6)"));
console.log(calculate("(   ((  (8+3) *(  4  -  10)  ) -   2  ) +(   (5  +   (   10/  2  )  )+   (  ( 9   + 5   )+(   2  +  2 ) )  )   )"));
