/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  // inorder dfs
  let result = [];
  function traverse(node) {
    if (!node) {
      return;
    }
    if (node.left) {
      traverse(node.left);
    }
    result.push(new Node(node.val));
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  result.forEach((node, i) => {
    node.right = result[i+1] || result[0];
    node.left = result[i-1] || result[result.length-1];
  });
  return result[0];
};