/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map();
  numbers.forEach((v, i) => map[v]=i);
  for (let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    let diff = target - num;
    if (diff in map && map[diff] !== i) {
      return [i+1, map[diff]+1];
    }
  }
  return [];
};