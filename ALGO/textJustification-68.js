/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let result = [];
  for (let i=0; i<words.length; i++) {
    let w = words[i];
    let lastLine = result.pop() || '';
    if ((lastLine+w).length+1 > maxWidth) {
      // append to next line
      lastLine && result.push(lastLine);
      result.push(w);
    } else {
      result.push((lastLine + ' ' + w).trim());
    }
  }

  return result.map((line, i) => {
    let sp = line.split(/\s/);
    // one word line or last line
    if (sp.length === 1 || i === result.length-1) {
      // just append tailing space
      while (line.length < maxWidth) {
        line += ' ';
      }
      return line;
    }
    // increase tailing space for each word until line length becomes maxWidth
    // except last word in the line
    let lineLen = line.length - sp.length + 1;
    let pointer = 0;
    while (lineLen < maxWidth) {
      sp[pointer] += ' ';
      pointer++;
      lineLen++;
      if (pointer === sp.length-1) {
        pointer = 0;
      }
    }
    return sp.join('');
  });
};
