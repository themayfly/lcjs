/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.queue.length === this.size) {
    let rem = this.queue.shift();
    this.sum -= rem;
  }
  this.queue.push(val);
  this.sum += val;
  return (this.sum/this.queue.length);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
