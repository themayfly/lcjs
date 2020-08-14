function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // sort
  let result = {
    diff: Number.MAX_SAFE_INTEGER,
    arr: []
  };
  arrayOne.sort((a, b) => (a - b));
  arrayTwo.sort((a, b) => (a - b));
  let i1 = 0, i2 = 0;
  while (i1 < arrayOne.length && i2 < arrayTwo.length) {
    let v1 = arrayOne[i1];
    let v2 = arrayTwo[i2];
    let diff = Math.abs(v1 - v2);
    if (v1 < v2) {
      i1++;
    } else if (v1 > v2) {
      i2++;
    } else if (v1 === v2) {
      // equal? it's the answer
      return [v1, v2];
    }
    if (diff < result.diff) {
      result.diff = diff;
      result.arr = [v1, v2];
    }
    console.log(result)
  }
  return result.arr;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
obj = {"arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17]}

console.log(smallestDifference(obj.arrayOne, obj.arrayTwo))
