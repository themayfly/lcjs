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
 * @return {TreeNode}
 */
var invertTreeRecursion = function(root) {
  if (!root) {
    return root;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  [root.left, root.right] = [right, left];
  return root;
};

var invertTree = function(root) {
  // bfs traverse 
  let queue = [root];
  let result = [];
  while (queue.length) {
    let cur = queue.shift();
    if (!cur) {
      continue;
    }
    result.push(cur);

    [cur.left, cur.right] = [cur.right, cur.left];
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  
  result = result || [];
  return result.length ? result[0] : root;
}