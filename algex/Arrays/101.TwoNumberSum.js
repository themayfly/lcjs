function twoNumberSum(array, targetSum) {
  // Write your code here.
	let set = new Set(array);
	let result = [];
	let pushed = new Set();
	for (let i = 0; i < array.length; i++) {
		let diff = targetSum - array[i];
		if (set.has(diff) && diff !== array[i]) {
				if (!pushed.has(array[i])) {
					result.push(diff, array[i]);
					pushed.add(diff);
					pushed.add(array[i]);
				}
		}
	}
	return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))