
var intersection = function(nums1, nums2) {
  let map = {};
  nums1.forEach(v => {
    map[v] = 1;
  });
  nums2.forEach(v => {
    if (v in map) {
      map[v]++;
    }
  });
  return Object.keys(map).filter(v => map[v] > 1);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectionBS = function(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) {
    return [];
  }
  nums1.sort();
  nums2.sort();
  let resultMap = {};
  let result = [];
  let [large, small] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  // large=[1,1,2,2], small=[2,2]
  let min = 0;
  for (let i = 0; i < small.length; i++) {
    // let startIdx = large.indexOf(small[i]);
    let startIdx = findIdxBS(large, small[i], min, large.length-1);
    // console.log('#### small[i]=%s, startIdx=%s', small[i], startIdx)
    if (startIdx === -1) {
      continue;
    }
    min = startIdx;
    if (small[i] in resultMap === false) {
      resultMap[small[i]] = small[i];
      result.push(small[i]);
    }
  }
  return result;
};

var findIdxBS = function(arr = [], target, start, end) {
  if (arr.length < 2) {
    return arr.indexOf(target);
  }
  start = start || 0;
  end = end || arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] < target) { // target is on right
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else { // arr[mid] === target means answer!
      return mid;
    }
  }
  return -1;
}

console.log('#### intersection = ', intersectionBS([1,2,2,1], [2,2]))
// console.log('#### intersection = ', intersectionBS([4,9,5], [9,4,9,8,4]))
// console.log('#### intersection = ', intersectionBS([3,1,2], [1,1]))
