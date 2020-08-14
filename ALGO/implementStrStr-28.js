/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  if (!haystack) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i+needle.length) === needle) {
        return i;
      }
    } else if (haystack[haystack.length-i-1] === needle[needle.length-1]) {
      if (haystack.slice(i-needle.length, i) === needle) {
        return i;
      }
    }    
  }
  return -1;
};