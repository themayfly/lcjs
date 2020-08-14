/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorderRecur = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  function traverse(node) {
    if (!node) {
      return;
    }
    result.push(node.val);
    for (let child of node.children) {
      traverse(child);
    }
  }
  traverse(root);
  return result;
};

var preorder = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  let stack = [root];
  while (stack.length) {
    let cur = stack.pop();
    result.push(cur.val);
    for (let child of cur.children.reverse()) {
      if (child) {
        stack.push(child);
      }
    }
  }
  return result;
};