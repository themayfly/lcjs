/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let n1 = l1, n2 = l2;
  let result = [];
  while (n1 || n2) {
    let val1 = n1 ? (n1.val || 0) : 0;
    let val2 = n2 ? (n2.val || 0) : 0;
    let sum = val1 + val2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    n1 = n1 ? (n1.next || null) : null;
    n2 = n2 ? (n2.next || null) : null;
  }
  if (carry > 0) {
    result.push(carry);
  }
  let head = new ListNode(result[0]);
  let prev = head;
  for (let i = 1; i < result.length; i++) {
    let node = new ListNode(result[i]);
    prev.next = node;
    prev = node;
  }
  return head;
};
