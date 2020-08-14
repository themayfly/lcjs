function longestPeak(array) {
	let max = 0;
  for (let i = 0; i < array.length; i++) {
    let peak = getPeak(array, i);
    console.log(peak);
		if (peak.length > max) {
			max = peak.length;
		}
		
	}
	return max;
}

function getPeak(array, i) {
  let left = Math.max(0, i-1), 
      right = Math.min(array.length, i+1);
  if (array[left] >= array[i] || array[i] >= array[right]) {
    return [];
  }
  console.log('#### while')
	while (left > 0 && right < array.length-1) {
		vL = array[left];
		peak = array[i];
    vR = array[right];
    if (vL >= peak) {
      return array.slice(left-1, right-left-1)
    }
    if (peak >= vR) {
      return array.slice(left, right-left-1)
    }
    left--, right++;
  }
  return array.slice(left, (right-left));
}

// Do not edit the line below.
exports.longestPeak = longestPeak;

obj = {"array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]}
console.log(longestPeak(obj.array))