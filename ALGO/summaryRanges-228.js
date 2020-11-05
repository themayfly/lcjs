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

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let prev,
      list = [];
  for (let i=0; i<nums.length; i++) {
    if (i===0 || nums[i] - prev > 1) {
      list.push([]);
    }
    list[list.length-1].push(nums[i]);
    prev = nums[i];
  }
  return list.map(el => {
    if (el.length === 1) {
      return el+'';
    } else {
      return el[0]+'->'+el[el.length-1];
    }
  });
};
