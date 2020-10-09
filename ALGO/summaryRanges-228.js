/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function (nums) {
  let res = [];
  let start = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(start + (start === nums[i] ? '' : (`->${nums[i]}`)));
      start = nums[i + 1];
    }
  }
  return res;
};

var summaryRanges = function(nums) {
  let res = [];
  let prev;
  // separate if it jumps 2 or more steps than previous
  for (let i=0; i<nums.length; i++) {
    if (i === 0 || (nums[i] - prev) > 1) {
      res.push([]);
    }
    res[res.length-1].push(nums[i]);
    prev = nums[i];
  }
  return res.map(v => {
    if (v.length === 1) {
      return v+'';
    } else {
      return `${v[0]}->${v[v.length-1]}`
    }
  })
};
