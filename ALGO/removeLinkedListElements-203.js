
var removeElements = function(head, val) {
  let cur = head;
  let prev = null;
  while (cur) {
    if (cur.val === val) {
      if (prev) {
        prev.next = cur.next;
      } else {
        head = cur.next;
      }
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
};