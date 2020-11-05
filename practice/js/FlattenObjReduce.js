// obj = { a: {d:1, b: {c: 0, d:{e:{f:{g:5}}}}}, A: 3};
// -> {'a.b.c': 0, 'a.d': 1}

// // 1. obj key contains no dot(.)
const flatten = (obj, prev='') => {
  // boundary condition
  if (!obj || Object.keys(obj).length === 0) {
    return {};
  }
  return Object.keys(obj).reduce((sum, cur) => {
    let key = cur;
    let value = obj[key];
    let newKey = prev ? prev+'.'+key : key;
    if (typeof value === 'object') {
      Object.assign(sum, flatten(value, newKey));
    } else {
      sum[newKey] = value;
    }
    return sum;
  }, {})
};

console.log('#### flatten = ', flatten({ a: {d:1, b: {c: 0, d:{e:{f:{g:5}}}}}, A: 3}));
