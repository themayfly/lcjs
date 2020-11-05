/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // exclude elements bigger than target
  candidates = candidates.filter(el => el <= target);
  candidates.sort((a, b) => (a - b));
  //  [1,1,2,5,6,7]

  let list = [];

  for (let n = 1; n < candidates.length; n++) {
    // pick n elements and save sum

  }
};


var pickNElements = function (arr, n) {
  let list = [];

}

combinationSum2([10,1,2,7,6,1,5], 8)
