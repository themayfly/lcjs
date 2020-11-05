// obj = { a: {d:1, b: {c: 0, d:{e:{f:{g:5}}}}}, A: 3};
// -> {'a.b.c': 0, 'a.d': 1}

// // 1. obj key contains no dot(.)
const result = {};
const flatten = (obj, prev='') => {
  // boundary condition
  if (!obj || Object.keys(obj).length === 0) {
    return {};
  }
  for (let key in obj) {
    let value = obj[key];
    // if (typeof value === 'object') {
    //   let flatObj = flatten(value);
    //   for (let oKey in flatObj) {
    //     result[key+'.'+oKey] = flatObj[oKey];
    //   }
    // } else {
    //   result[key] = value;
    // }

    let newKey = prev ? prev+'.'+key : key;
    if (typeof value === 'object') {
      Object.assign(result, flatten(value, newKey))
      // result[newKey] = flatten(value, newKey)
    } else {
      result[newKey] = value;
    }
  }
  return result;
};

console.log('#### flatten = ', flatten({ a: {d:1, b: {c: 0, d:{e:{f:{g:5}}}}}, A: 3}));
