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
var getMinimumDifference = function(root) {
  let diff = Number.MAX_SAFE_INTEGER;
  let prev = Number.MIN_SAFE_INTEGER;
  // inorder dfs
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    diff = Math.min(Math.abs(node.val - prev), diff);
    prev = node.val;
    traverse(node.right);
  }
  traverse(root);
  return diff;
};