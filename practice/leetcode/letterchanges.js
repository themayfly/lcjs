var vowelMap = {
  'a': 'A',
  'e': 'E',
  'i': 'I',
  'o': 'O',
  'u': 'U'
}
function LetterChanges(str) {
  if (!str) {
    return str;
  }
  var list = [...str];
  var shifted = [];
  list.forEach(el => {
    if (el.match(/[a-z]/i)) {
      if (el === 'Z') {
        shifted.push('A');
      } else if (el === 'z') {
        shifted.push('a');
      } else {
        let number = el.charCodeAt();
        shifted.push(String.fromCharCode(number+1));
      }
    } else {
      shifted.push(el);
    }
  });
  return shifted.map(el => vowelMap[el] || el).join('');

}

// keep this function call here
LetterChanges(readline());