function findClosestValueInBst(tree, target) {
  // Write your code here.
	if (!tree) {
		return target;
	}
	// BST to sorted array
	let list = [];
	function dfs(node) {
		if (!node) {
			return target;
		}
		if (node.value === target) {
			list.push(target);
			return target;
		}
		// inorder: left, self, right
		if (node.left && node.value >= target) dfs(node.left);
		list.push(node.value);
		if (node.right && node.value <= target) dfs(node.right);
	}
	dfs(tree);
	for (let i=1; i<list.length; i++) {
		if (list[i-1] < target && target < list[i]) {
			return (target - list[i-1] < list[i] - target) ? list[i-1] : list[i];
		}
	}
	return target;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
