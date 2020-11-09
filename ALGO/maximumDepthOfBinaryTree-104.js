/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let maxDepth = 1;
  let stack = [[root, 1]];
  while (stack.length) {
    let [cur, depth] = stack.pop();
    cur.left && stack.push([cur.left, depth+1]);
    cur.right && stack.push([cur.right, depth+1]);
    maxDepth = Math.max(maxDepth, depth);
  }
  return maxDepth;
};

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  function traverse(node) {
    if (!node) return 0;
    let left = traverse(node.left);
    let right = traverse(node.right);
    return Math.max(left, right) + 1;
  }
  return traverse(root);
};
