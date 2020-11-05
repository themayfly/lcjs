/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (val in this.map) {
    return false;
  } else {
    this.arr.push(val);
    this.map[val] = this.arr.length-1;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  // swap val's idx with last element to get easy to remove (by popping)
  if (val in this.map === false) {
    return false;
  } else if (val === this.arr[this.arr.length-1]) {
    delete this.map[val];
    this.arr.pop();
    return true;
  } else {
    let idx = this.map[val];
    let len = this.arr.length;
    [this.arr[idx], this.arr[len-1]] = [this.arr[len-1], this.arr[idx]];
    delete this.map[val];
    this.map[this.arr[idx]] = idx;
    this.arr.pop();
    return true;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let ran = Math.floor(Math.random() * this.arr.length);
  return this.arr[ran];
};

// /**
//  * Initialize your data structure here.
//  */
// var RandomizedSet = function() {
//   this.map = {};
// };
//
// /**
//  * Inserts a value to the set. Returns true if the set did not already contain the specified element.
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
//   if (val in this.map) {
//     return false;
//   } else {
//     this.map[val] = val;
//     return true;
//   }
// };
//
// /**
//  * Removes a value from the set. Returns true if the set contained the specified element.
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//   if (val in this.map) {
//     delete this.map[val];
//     return true;
//   } else {
//     return false;
//   }
// };
//
// /**
//  * Get a random element from the set.
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
//   let keys = Object.keys(this.map);
//   let ran = Math.floor(Math.random() * keys.length);
//   return this.map[keys[ran]];
// };
