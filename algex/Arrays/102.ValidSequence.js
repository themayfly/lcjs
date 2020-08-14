function isValidSubsequence(array, sequence) {
	let idxA = 0,
			idxS = 0;
	while (idxA < array.length && idxS < sequence.length) {
		if (array[idxA] === sequence[idxS]) {
			idxA++;
			idxS++;
		} else {
			idxA++;
		}		
	}
	return idxS === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
