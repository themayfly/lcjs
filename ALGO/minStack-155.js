/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let prev = this.getMin();
  let min = prev === null ? x : Math.min(prev, x);
  this.stack.push({val: x, min: min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let ele = this.stack[this.stack.length-1];
  return ele ? ele.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let ele = this.stack[this.stack.length-1];
  return ele ? ele.min : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */