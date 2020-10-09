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
var findTilt = function(root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  function traverse(node) {
    if (!node) {
      return 0;
    }
    let leftTilt = traverse(node.left);
    let rightTilt = traverse(node.right);
    result += Math.abs(leftTilt - rightTilt);
    return leftTilt + rightTilt + node.val;
  }
  traverse(root);
  return result;
};
