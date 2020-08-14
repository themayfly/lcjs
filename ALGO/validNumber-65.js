const isNumber = s => {
  s = s.trim();
  let nums = 0;
  let es = 0;
  let dots = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[0-9]/)) {
      nums++;
    } else if (s[i] === ".") {
      if (dots > 0 || es > 0) {
        return false;
      }
      dots++;
    } else if (s[i] === 'e') {
      if (es > 0 || nums === 0) {
        return false;
      }
      nums = 0;
      es++;
    } else if (s[i].match(/\+|\-/)) {
      if (i > 0 && s[i-1] !== 'e') {
        return false;
      }
    } else {
      return false;
    }
  }
  return nums > 0;
};
