/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
  this.queue = [];
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  this.queue.push({timestamp});
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  // remove expired elements
  while (this.queue.length && (timestamp - this.queue[0].timestamp >= 300)) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
