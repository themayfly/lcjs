/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.data = nums;
  this.nSum = [];
  let sum = 0;
  for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    this.nSum.push(sum);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  // [1,2,3,4,5]
  // 2~4 => 0~4 - 0~2
  // sumRange(i, j) = sumRange(0, j) - sumRange(0, i);
  return i === 0 ? this.nSum[j] : (this.nSum[j] - this.nSum[i-1]);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */