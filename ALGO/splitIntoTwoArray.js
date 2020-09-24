/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArray = function(nums) {
    let lSum = [], rSum = [];
    for (let i=0; i<nums.length; i++) {
        let j = nums.length-i-1;
        lSum[i] = nums[i] + (lSum[i-1] || 0);
        rSum[j] = nums[j] + (rSum[j+1] || 0);
    }
    for (let i=0; i<nums.length-1; i++) {
        if (lSum[i] === rSum[i+1]) {
            return i;
        }
    }
    return -1;
};

nums = [1,2,1,1,3]
console.log(splitArray(nums));