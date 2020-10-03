/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || !nums.length) {
    return nums;
  }
  let result = [];
  let temp = [];
  let prev = null;
  for (let i=0; i<nums.length; i++) {
    let curr = nums[i];
    if (prev !== null && (curr - prev) > 1) {
      temp.push('|');
    }
    temp.push(curr);
    prev = curr;
  }
  return temp.join(',').split('|').map(v => {
    let sp = v.split(',').filter(v => v);
    if (sp.length === 1) {
      return sp[0];
    } else {
      return `${sp[0]}->${sp.pop()}`;
    }
  });
};