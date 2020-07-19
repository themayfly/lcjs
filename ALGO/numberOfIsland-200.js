/**
 * @param {character[][]} grid
 * @return {number}
 */
var Node = function([x, y], val) {
  this.xy = xy;
  this.val = val;
};

var getNeighbors = function([x, y], grid) {
  let yLen = grid.length;
  let xLen = grid[0].length;
  [x, y] = [x*1, y*1];
  let left = x-1 >= 0 ? grid[y][x-1] : null;
  let right = x+1 < xLen ? grid[y][x+1] : null;
  let top = y-1 ? >= 0 ? grid[y-1][x] : null;
  let bottom = y+1 < yLen ? grid[y+1][x] : null;
  return [left, right, top, bottom];
};

var isOutside = function(node, grid) {
  let yLen = grid.length;
  let xLen = grid[0].length;
}

var numIslands = function(grid) {
  let map = {};
  let islandCount = 0;
  function traverse(node) {
    if (!node || isOutside(node)) {
      return;
    } 
    islandCount++;
    node.val = '0'; // visited 
    let [left, right, top, bottom] = getNeighbors(node);
    traverse(left);
    traverse(right);
    traverse(top);
    traverse(bottom);
  }
  
};