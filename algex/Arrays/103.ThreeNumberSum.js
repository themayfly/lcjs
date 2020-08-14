function threeNumberSum(array, targetSum) {
	let result = [];
	// sort
	array.sort();
	for (let i = 0; i < array.length; i++) {
		let cur = array[i];
    let twoSum = targetSum - cur;
    let arr = array.filter((v, idx) => i !== idx);
    let subResult = twoNumberSum(arr, twoSum)
    if (subResult.length) {
      subResult.forEach(v => result.push([cur, ...v]))
    }
  }
  let distict = {};
  result.forEach(v => {
    let sorted = v.sort((a, b) => (a - b));
    distict[sorted] = sorted;
	});
	result = Object.values(distict);
	result.sort((a, b) => {
		let A = a[0]*100 + a[1]*10 + a[2];
		let B = b[0]*100 + b[1]*10 + b[2];
		return A - B;
	})
	return result;
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let set = new Set(array);
	let result = [];
	let pushed = new Set();
	for (let i = 0; i < array.length; i++) {
		let diff = targetSum - array[i];
		if (set.has(diff) && diff !== array[i]) {
				if (!pushed.has(array[i])) {
					result.push([diff, array[i]]);
					pushed.add(diff);
					pushed.add(array[i]);
				}
		}
  }
	return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

console.log(threeNumberSum(array, targetSum))