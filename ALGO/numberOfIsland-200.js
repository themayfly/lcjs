/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const rowLen = grid.length;
  const colLen = grid[0].length;
  let islandCount = 0;

  function traverse(row, col) {
    if (row >= rowLen || row < 0 || col >= colLen || col < 0) { // out of boundary
      return;
    }
    if (grid[row][col] === '0') { // already visited or water
      return;
    }
    grid[row][col] = '0';
    traverse(row+1, col); //bottom
    traverse(row-1, col); // top
    traverse(row, col+1); // right
    traverse(row, col-1); // left
  }

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] === '1') {
        islandCount++;
        traverse(r, c);
      }
    }
  }
  return islandCount;
};
