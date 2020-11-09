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
 var diameter = function(root) {
   let result = 0;
   function traverse(node) {
     if (!node) return 0;
     let max = 0;
     for (let cur of node.children) {

     }
   }
 };
