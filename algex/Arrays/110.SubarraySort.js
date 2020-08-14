function subarraySort(array) {
  // basic edge case
	if (!array || !array.length) {
		return [];
	}
	
	function checkSort(left, right) {
				
	}
	
	// goal: find a case vL > vR
	let left = 0,
      right = array.length-1,
      foundStart = false;
  
  let result = []
	while (left < right) {
		let vL = array[left],
				vR = array[right];
		if (!foundStart && vL >= vR) {
      // left is start index of subarray
      foundStart = true;
      result.push(left);
    }
    if (foundStart) {
      // found end index
      if (vL < vR) {
        console.log('### vL = %s, vR = %s', vL, vR, right);
        result.push(right-1);
        break;
      }
      right++;
    } else {
      left++, right--;
    }
  }
	let indices = result.length ? result : [-1, -1];
  console.log('#### indices = ', indices);
	return indices.map(v => array[v]);
}

// Do not edit the line below.
exports.subarraySort = subarraySort;

obj = {"array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]}

console.log(subarraySort(obj.array))


/*

  [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 20, 12, 13, 14, 15, 16, 17, 19, 21, 22]
                     ^                         ^        

*/