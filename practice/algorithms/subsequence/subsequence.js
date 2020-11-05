
const getSubSequence = arr => {
  if (!arr || !arr.length) {
    return [];
  }
  let startIdx = 0;
  let endIdx = 0;
  let len = arr.length;
  let seqList = [];
  for (startIdx = 0; startIdx < len; startIdx++) {
    for (endIdx = startIdx; endIdx < len; endIdx++) {
      seqList.push({
        sum: arr.slice(startIdx, endIdx+1).reduce((sum, cur) => (sum + cur), 0),
        list: arr.slice(startIdx, endIdx+1)
      })
    }
  }
  return seqList;
}

const getMaxSubSequence = arr => {
  const list = getSubSequence(arr);
  list.sort((a, b) => (a.sum === b.sum ? 0 : a.sum - b.sum));
  return list.pop();
}

console.log(getSubSequence([1,2,3,4]))
console.log(getMaxSubSequence([1,2,3,4]))