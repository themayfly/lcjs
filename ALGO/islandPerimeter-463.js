/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  var perimeter = 0;
  
  for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
          if (!grid[row][col]) continue;
          
          perimeter += 4;
          
          // abstract the number of adjacent island
          if (row > 0 && grid[row - 1][col]) perimeter--;
          if (col > 0 && grid[row][col - 1]) perimeter--;
          if (row < rows - 1 && grid[row + 1][col]) perimeter--;
          if (col < cols - 1 && grid[row][col + 1]) perimeter--;
      }
  }
  
  return perimeter;
};

var islandPerimeter = function(grid) {
  if (!grid || !grid.length) {
    return 0;
  }
  // 1: land, 0:water, -1:checked
  let rows = grid.length;
  let cols = grid[0].length;
  let perimeter = 0;
  
  for (let r=0; r<rows; r++) {
    for (let c=0; c<cols; c++) {
      if (grid[r][c] === 1) {
        perimeter += getPerimeter(r, c, grid);
        // grid[r][c] = 0;
      }
    }
  }
  return perimeter;
};


function getVal(r, c, grid) {
  // out of bound return undefined
  let rows = grid.length;
  let cols = grid[0].length;    
  if (r < 0 || r >= rows || c < 0 || c >= cols) {
    return undefined;
  } 
  // water or visited
  return grid[r][c];
}

function getPerimeter(r, c, grid) {
  let val = getVal(r, c, grid);
  if (val === undefined || val === 0 || val === -1) {
    return 0;
  } else {
    grid[r][c] = -1;      
  }
  let sum = 0;
  // my perimeter
  let left = getVal(r, c-1, grid);
  let right = getVal(r, c+1, grid);
  let top = getVal(r-1, c, grid);
  let bottom = getVal(r+1, c, grid);

  // once get my perimeter then mark as -1 ( visited )
  if (!left) sum += 1;
  else if (left === 1) sum += getPerimeter(r, c-1, grid);

  if (!right) sum += 1;
  else if (right === 1) sum += getPerimeter(r, c+1, grid);

  if (!top) sum += 1;
  else if (top === 1) sum += getPerimeter(r-1, c, grid);

  if (!bottom) sum += 1;
  else if (bottom === 1) sum += getPerimeter(r+1, c, grid);

  return sum;
}