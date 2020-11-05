var getMatchedIdx = function(nums, target, startIndex) {
  let answer;
  nums.find((num, index) => {
      if (index > startIndex && (nums[index] + nums[startIndex]) === target) {
          answer = index;
      }
  });
  console.log('#### answer = ', nums[answer]);
}

list = [2, 7, 11, 8, 5, 15, 3, 4, 7, 9, 10];

// getMatchedIdx(list, 13, 0);

const answer = [];
var getTwoSum = function(nums, target) {
  let matched = [];
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if ((nums[i]+nums[j]) === target) {
        matched = [i, j];
        answer.push([nums[i], nums[j]]);
        break;
      }
    }
    if (matched.length) {
      break;
    }
  }
  let filtered = nums.filter((value, index) => !matched.includes(index))
  if (matched.length === 0) {
    console.log('#### no more matched, priting answer  = ' , answer)
    console.log('#### no more matched, priting indexes = ' , answer.map(el => (
      [list.indexOf(el[0]), list.indexOf(el[1])]
    )))
  } else {
    getTwoSum(filtered, target);
  }
}

getTwoSum(list, 13);
