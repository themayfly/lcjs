
const flatten = (obj, prevKey) => {
  // boundary conditions
  if (!obj || Object.keys(obj).length === 0) {
    return {};
  }
  let delimiter = '.';
  let result = {};
  for (let key in obj) {
    let value = obj[key];
    let newKey = prevKey ? (prevKey + '.' + key) : key;
    if (typeof value === 'object') {
      Object.assign(result, flatten(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}


const input = {a: 1, b: 2, c: {d: 3, e: {f: 4, g: [1,2,3]}}}; // => {a: 1, b: 2, 'c.d': 3}
console.log('#### flattened obj = ', flatten(input));