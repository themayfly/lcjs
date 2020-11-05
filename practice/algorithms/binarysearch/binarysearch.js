// return half of elements which contains target
const _ = require('lodash');

const reduce = (arr, target) => {
  if (!arr || arr.length === 1) {
    console.log('#### arr = ', list.indexOf(target))
    return;
  }
  const halfIndex = Math.floor(arr.length/2);
  const arr1 = arr.slice(0, halfIndex);
  const arr2 = arr.slice(halfIndex);
  if (arr1.indexOf(target) > -1) {
    reduce(arr1, target);
  } else if (arr2.indexOf(target) > -1) {
    reduce(arr2, target);
  } else {
    console.log('#### target %s does not exist in ', target, arr)
    process.exit(0);
    return;
  }
}

const list = _.times(process.argv[2])
console.log(reduce([...list], process.argv[3]*1));