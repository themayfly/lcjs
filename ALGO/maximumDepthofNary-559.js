/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  // dfs iterative
  let depth = 1;
  let stack = [[root, 1]];
  while (stack.length) {
    let [node, count] = stack.pop();
    if (!node) {
      continue;
    }
    if (node.children.length > 0) {
      for (let child of node.children) {
        stack.push([child, count+1]);
        depth = Math.max(depth, count+1);
      }
    }
  }
  return depth;
};
