/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.map.delete(key);
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    const key2remove = this.map.keys().next().value;
    this.map.delete(key2remove);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */