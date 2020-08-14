function isMonotonic(array) {
  // Write your code here.
	let inc = 0, dec = 0;
	for (let i = 1; i<array.length; i++) {
		let prev = array[i-1];
		let curr = array[i];
		let diff = curr - prev;
		if (diff > 0) {
			inc++;
		} else if (diff < 0) {
			dec++;
		}
		if (inc > 0 && dec > 0) {
			return false;
		}
	}
	return true;
}


// Do not edit the line below.
exports.isMonotonic = isMonotonic;
