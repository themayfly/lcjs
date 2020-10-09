/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let sp = text.split(/\s/);
  let words = sp.filter(v => v && v.trim());
  let numOfSpace = text.length - text.replace(/\s/g, '').length;
  let numOfGap = words.length - 1;
  let numOfTailSpace = numOfSpace % numOfGap;
  if (numOfTailSpace > 0) {
    numOfSpace = numOfSpace - numOfTailSpace;
    while (numOfTailSpace--) {
      words[words.length-1] += ' ';
    }
  }
  // append tailing space until
  let pointer = 0;
  while (numOfSpace--) {
    words[pointer] += ' ';// append tailing space
    pointer++;
    if (pointer >= words.length-1) {
      pointer = 0;
    }
  }
  return words.join('');
};
