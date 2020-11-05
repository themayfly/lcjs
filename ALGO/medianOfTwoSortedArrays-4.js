/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // concat and binary search
  let nums = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      nums.push(nums1.shift());
    } else {
      nums.push (nums2.shift());
    }
  }
  if (nums1.length) nums.push(...nums1);
  if (nums2.length) nums.push(...nums2);

  if (nums.length % 2 === 0) {
    let midIdx = Math.floor(nums.length / 2);
    return (nums[midIdx-1] + nums[midIdx]) / 2;
  } else {
    let midIdx = Math.floor(nums.length / 2);
    return nums[midIdx];
  }
};
