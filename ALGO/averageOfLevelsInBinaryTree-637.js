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
var averageOfLevels = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  // bfs, calc avg in each level
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let sum = 0, count = queue.length;
    while (queue.length) {
      let cur = queue.shift();
      sum += cur.val;
      if (cur.left) {
        temp.push(cur.left);
      }      
      if (cur.right) {
        temp.push(cur.right);
      }      
    }
    queue.push(...temp);
    result.push(Math.round(100000*sum/count)/100000);
  }
  return result;
};