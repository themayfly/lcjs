/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs) {
    return '';
  } else if (strs.length === 1) {
    return strs.pop();
  }
  strs.sort((a, b) => b.length - a.length);
  let max = Math.max(...strs.map(el => el.length));
  let prefix = '';
  let prefixList = [];
  for (let i = 1; i <= max; i++) {
    prefix = strs[0].slice(0, i);
    if (isMatch(prefix, strs)) {
      prefixList.push(prefix);
      continue;
    } else {
      break;
    }
  }
  return prefixList.length ? prefixList.pop() : '';
};

var isMatch = function(prefix, strs) {
  return strs.every(el => el.match(new RegExp('^'+prefix)));
};

console.log(longestCommonPrefix(["c","c"]));