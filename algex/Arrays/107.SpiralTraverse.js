function spiralTraverse(array) {
	let visited = [];
	let rMax = array.length-1;
	let cMax = array[0].length-1;	
	function visit(r, c, dir) {
		if (visited.length >= array.length*array[0].length) {
			return;
    }
    let v = array[r][c];
		visited.push(v);
		array[r][c] = 'V';
		if (dir === 'right') {
			if (c+1 <= cMax && array[r][c+1] !== 'V') {
				visit(r, c+1, dir);
			} else {
				visit(r+1, c, 'down');
			}
		} else if (dir === 'down') {
			if (r+1 <= rMax && array[r+1][c] !== 'V') {
				visit(r+1, c, dir);
			} else {
				visit(r, c-1, 'left');
			}
		} else if (dir === 'left') {
			if (c-1 >=0 && array[r][c-1] !== 'V') {
				visit(r, c-1, dir);
			} else {
				visit(r-1, c, 'up');
			}
		} else if (dir === 'up') {
			if (r-1 >= 0 && array[r-1][c] !== 'V') {
				visit(r-1, c, dir);
			} else {
				visit(r, c+1, 'right');
			}
		} 
	}
  visit(0, 0, 'right');
  return visited;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
obj = {"array": [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]}

console.log(spiralTraverse(obj.array))