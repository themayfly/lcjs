function moveElementToEnd(array, toMove) {
  let iL = 0, iR = array.length-1;
  while (iL <= iR) {
    let vL = array[iL];
    let vR = array[iR];
    if (vL === vR) {
      iR--;
    } else if (vL === toMove && vR !== toMove) {
      // swap
      [array[iL], array[iR]] = [array[iR], array[iL]];
      iL++;
    } else if (vL !== toMove && vR === toMove) {
      iL++;
    } else if (vL !== toMove && vR !== toMove) {
      iL++;
    }
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
// obj = {"array": [2, 1, 2, 2, 2, 3, 4, 2], "toMove": 2}
obj = {"array": [1, 2, 3, 4, 5], "toMove": 3}

console.log(moveElementToEnd(obj.array, obj.toMove))