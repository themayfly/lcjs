var twoSum = function(nums, target) {
  let map = new Map();
  nums.forEach((v, i) => map[v] = i);
  for (let i=0; i<nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (diff in map && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
  return [];
};