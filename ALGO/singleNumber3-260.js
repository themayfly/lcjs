/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  let map = {};
  for (let i=0; i<nums.length; i++) {
    let n = nums[i];
    if (n in map) {
      delete map[n];
    } else {
      map[n] = n;
    }
  }
  return Object.keys(map);
};