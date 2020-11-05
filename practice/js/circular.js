var obj1 = {name: 'me', age: 11};
obj1.self = obj1;

function avoidCircularRef(obj1) {
  var result = {};
  for (let key in obj1) {
    let value = obj1[key];
    let valueClone = {};
    if (typeof(value) === 'object') {
      try {
        let cloned = JSON.parse(JSON.stringify(value));
        result[key] = value;
      } catch (err) {
        let valueClone = {};
        if (Array.isArray(value)) {
          valueClone = [];
          value.forEach(el => {
            valueClone.push(avoidCircularRef(e))
          });
        } else {
          for (let key2 in value) {
            if (key2 === key) {
              continue;
            }
            valueClone[key2] = avoidCircularRef(value[key2]);
          }
        }
        result[key] = valueClone;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}


console.log(avoidCircularRef(obj1))