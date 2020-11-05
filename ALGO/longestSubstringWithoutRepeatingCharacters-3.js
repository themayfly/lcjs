/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0,
        r = 0,
        set = new Set(),
        maxLen = 0;
    while (r < s.length) {
        if (!set.has(s[r])) {
          set.add(s[r]);
          maxLen = Math.max(maxLen, set.size);
          r++;
        } else {
          set.delete(s[l]);
          l++;
        }
    }
    return maxLen;
};
