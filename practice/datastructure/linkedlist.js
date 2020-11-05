class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(element) {
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertAt(element, idx) {

  }

  removeFrom(idx) {

  }

  isEmpty() {

  }

  print() {

  }

  size() {
    return this.size;
  }
}