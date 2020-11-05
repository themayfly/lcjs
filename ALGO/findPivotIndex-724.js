/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sumL = [],
      sumR = [];
  for (let i=0; i<nums.length; i++) {
    sumL.push((sumL[i-1] || 0) + nums[i]);
  }
  for (let i=nums.length-1; i>=0; i--) {
    sumR.unshift((sumR[0] || 0) + nums[i]);
  }
  for (let i=0; i<nums.length; i++) {
    if (sumL[i] === sumR[i]) {
      return i;
    }
  }
  return -1;
};
