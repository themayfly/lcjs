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
  let n1 = l1, n2 = l2;
  let a1 = [], a2 = [];
  while(n1) {
    a1.push(n1.val);
    n1 = n1.next || null;
  }
  while(n2) {
    a2.push(n2.val);
    n2 = n2.next || null;
  }
  let result = [];
  let carry = 0;
  while (a1.length || a2.length) {
    let v1 = a1.pop() || 0;
    let v2 = a2.pop() || 0;
    let sum = v1 + v2 + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    result.unshift(carry);
  }
  let head = new ListNode(result.shift());
  let prev = head;
  while (result.length) {
    let node = new ListNode(result.shift());
    prev.next = node;
    prev = node;
  }
  return head;
};

/*
[7,2,4,3]
[5,6,4]

[5]
[5]
*/
