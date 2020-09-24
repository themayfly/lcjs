/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || !nums.length) {
    return 0
  } else if (nums.length === 1) {
    return nums[0];
  }
  let maxSum = -Infinity;
  let curSum = -Infinity;
  /*
    [-2,1,-3,4,-1,2,1,-5,4]
        ^
    curSum = Math.max(curSum, nums[i])
    maxSum = Math.max(maxSum, cusSum);
  */
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    curSum = Math.max(curSum, nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};

var maxSubArrayBF = function(nums) {
  if (!nums || !nums.length) {
    return 0
  } else if (nums.length === 1) {
    return nums[0];
  }
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length+1; j++) {
      let subArr = nums.slice(i, j);
      let sum = subArr.reduce((acc, cur) => (acc + cur), 0);
      console.log(subArr, sum)
      if (maxSum < sum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// nums = [-2,1,-3,4,-1,2,1,-5,4]
nums = [-2,1]
console.log(maxSubArray(nums));
