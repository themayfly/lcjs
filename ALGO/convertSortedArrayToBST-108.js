/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) {
    return null;
  }
  function build(arr) {
    if (!arr || !arr.length) {
      return null;
    }
    let mid = Math.floor(arr.length/2);
    let node = new TreeNode(arr[mid]);
    node.left = build(arr.slice(0, mid));
    node.right = build(arr.slice(mid+1));
    return node;
  }
  return build(nums);
};
