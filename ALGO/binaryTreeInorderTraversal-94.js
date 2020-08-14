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
var inorderTraversal = function(root) {
  let result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  }
  traverse(root);
  return result;
};

var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  let cur = root;
  let stack = [];
  while (stack.length || cur) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
};


