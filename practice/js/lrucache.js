
var LRUCache = function(capacity=3) {
  this.data = [];
  this.map = {};
  this.capacity = capacity;
}

LRUCache.prototype.get = function(key) {
  if (!key in this.map) {
    return -1;
  }
  this.move(key);
  return this.map[key];
}

LRUCache.prototype.move = function(key, value) {
  // if exists move to the first
  let idx = this.map[key] || -1;
  if (idx > -1) {
    this.data.unshift(this.data.splice(idx, 1)[0]);
  } else {
    if (arguments.length > 1) {
      this.data.unshift(value);
    }
  }

  // refresh map
  this.map = {};
  this.data.forEach((el, idx) => {
    this.map[el] = idx;
  });
}

LRUCache.prototype.put = function(key, value) {

  // move
  this.move(key, value);

  // remove tail
  if (this.data.length > this.capacity) {
    let tobeRemoved = this.data.pop();
    delete this.map[tobeRemoved];
  }
}

var cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
console.log(cache);