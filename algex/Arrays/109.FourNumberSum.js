function fourNumberSum(array, targetSum) {

  function getCombination(arr1, arr2) {
    let list = [];
    let set = new Set();
    for (let v1 of arr1) {
      for (let v2 of arr2) {
        let dupMap = {};
        let comb = [...v1, ...v2].map(idx => array[idx]);
        comb.forEach(v => dupMap[v]=v);
        if (Object.keys(dupMap).length !== 4) {
          continue;
        }
        comb.sort((a, b) => (a - b));
        let key = comb.join(',');
        if (!set.has(key)) {
          set.add(key);
          list.push(comb);
        }
      }
    }
    return list;
  }

	let map = {
		// 3: [[0, 2], [3, 4]] // save index only
  }; // store 2 sum
  let idxSet = new Set();
  for (let i=0; i<array.length-1; i++) {
		for (let j=i+1; j<array.length; j++) {
      let sum = array[i] + array[j];
      if (sum in map === false) {
        map[sum] = [];
      }
      let strKey = [i, j].sort().join(',');
      if (!idxSet.has(strKey)) {
        map[sum].push([i, j].sort());
        idxSet.add(strKey);
      }
		}
  }
  let result = {};
  let set = new Set();
	// get two sum
	for (let sum in map) {
    let diff = targetSum - sum;
    if (diff in map) {
      let comb = getCombination(map[sum], map[diff]);
      comb.forEach((v, i) => {
        result[v] = v;
      });
      
    }
  }
  return Object.values(result);
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;

obj = {"array": [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], "targetSum": 4}

console.log(fourNumberSum(obj.array, obj.targetSum))