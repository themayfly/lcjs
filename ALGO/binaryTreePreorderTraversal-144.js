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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = [root];
  let result = [];
  while (stack.length) {
    let cur = stack.pop();
    if (!cur) {
      continue; 
    }
    result.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return result; 
};


var preorderTraversal = function(root) {
  let result = [];
  function traverse(node) {
    if (node) {
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(root);
  return result;
};