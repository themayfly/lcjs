var relativeSortArray = function (arr1, arr2) {
  // rest items ( unmatched )
  const rest = [];
  // sorted array ( result )
  const sorted = [];
  arr2.forEach(el => {
    let idx = arr1.indexOf(el);
    if (idx === -1) {
      rest.push(el);
    } else {
      while (idx > -1) {
        sorted.push(el);
        arr1 = arr1.slice(0, idx).concat(arr1.slice(idx + 1))
        idx = arr1.indexOf(el);
      }
    }
  });

  return sorted.concat(arr1.sort((a, b) => (a-b)));
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))