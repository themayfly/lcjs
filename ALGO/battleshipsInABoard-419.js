/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  if (!board || board.length === 0) {
    return 0;
  }
  const rowLen = board.length;
  const colLen = board[0].length;
  let count = 0;
  function traverse(row, col) {
    // out of boundary
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
      return 0;
    }
    // water or already sank
    if (board[row][col] === '.') {
      return 0;
    }
    // mark it as sank
    board[row][col] = '.';
    // traverse neighbors
    traverse(row-1, col); // top
    traverse(row+1, col); // bottom
    traverse(row, col+1); // right
    traverse(row, col-1); // left
    return 1;
  }

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (board[r][c] === 'X') {
        count += traverse(r, c);
      }
    }
  }
  return count;
};
